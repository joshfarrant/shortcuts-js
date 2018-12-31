import React from 'react';

import * as shortcutsJs from '@joshfarrant/shortcuts-js';
import * as shortcutsJsActions from '@joshfarrant/shortcuts-js/actions';
import download from 'downloadjs';

import Button from '../Button';
import CodeEditor from '../CodeEditor';

import styles from './styles.module.scss';

const initialCode = `// We'll use this later to reference the output of a calculation
let calcVar = actionOutput();

// Define a list of actions
const actions = [
  comment({
    text: 'Hello, world!',
  }),
  number({
    number: 42,
  }),
  calculate({
    operand: 3,
    operation: '/',
  }, calcVar),
  showResult({
    // Use the Magic Variable
    text: withVariables\`Total is \${calcVar}!\`,
  }),
];`;

export default class Component extends React.Component {
  state = {
    code: initialCode,
    shortcutError: null,
  }

  downloadShortcut = () => {
    const shortcutsJsImports = Object
      .keys(shortcutsJs)
      .join(', ');
    const shortcutsJsActionsImports = Object
      .keys(shortcutsJsActions)
      .join(', ');

    const code = `
      const {
        ${shortcutsJsImports}
      } = shortcutsJs;

      const {
        ${shortcutsJsActionsImports}
      } = shortcutsJsActions;

      ${this.state.code}
    `;

    try {
      const {
        error,
        actions,
        // eslint-disable-next-line no-eval
      } = window.eval.call(window, `
        ((shortcutsJs, shortcutsJsActions) => {
          try {
            ${code}

            return {
              actions,
            };
          } catch (error) {
            return {
              error,
            };
          }
        })
      `)(shortcutsJs, shortcutsJsActions);

      if (!error) {
        this.setState({
          shortcutError: null,
        });

        const shortcut = shortcutsJs.buildShortcut(actions);

        download(shortcut, 'Shortcuts JS.shortcut', 'application/octet-stream');
        return;
      }

      this.setState({
        shortcutError: error,
      });
    } catch (err) {
      this.setState({
        shortcutError: err,
      });
    }
  }

  render() {
    return (
      <React.Fragment>
        <p>
          Write some code below to create a Shortcut, or download the generated example.
        </p>
        <CodeEditor
          value={this.state.code}
          onChange={(newCode) => {
            this.setState({
              code: newCode,
            });
          }}
        />
        {this.state.shortcutError && (
          <button
            className={styles.error}
            type="button"
            onClick={() => {
              this.setState({
                code: initialCode,
                shortcutError: null,
              });
            }}
          >
            Something&apos;s not right. Check your code and try again, or click here to
            reset the code.
          </button>
        )}
        <p>
          Download the Shortcut, then AirDrop it to your iPhone or iPad.
          The Shortcut will then be automatically imported into the Shortcuts app.
        </p>
        <div className={styles.buttonContainer}>
          <Button
            onClick={() => this.downloadShortcut()}
            inverted
          >
            Download Your Shortcut
          </Button>
        </div>
      </React.Fragment>
    );
  }
}
