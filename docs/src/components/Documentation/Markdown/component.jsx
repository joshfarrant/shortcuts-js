import React from 'react';
import PropTypes from 'prop-types';

import Remarkable from 'remarkable';
import RemarkableRenderer from 'remarkable-react';
import CodeMirror from 'codemirror';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/meta';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import styles from './styles.module.scss';

const md = new Remarkable();
md.renderer = new RemarkableRenderer({
  components: {
    pre: ({ content, params: language }) => (
      <CodeBlock
        content={content}
        language={language}
      />
    ),
  },
});

const CodeBlock = ({ content, language }) => {
  const theme = 'dracula';
  const elements = [];

  let index = 0;
  let tokenBuf = '';
  let lastStyle = null;

  const pushElement = (token, style) => elements.push(
    <span
      className={style && `cm-${style}`}
      key={++index}
    >
      {token}
    </span>
  );

  const mode = CodeMirror.findModeByName(language);
  CodeMirror.runMode(content, mode ? mode.mime : language, (token, style) => {
    if (lastStyle === style) {
      tokenBuf += token;
    } else {
      if (tokenBuf) pushElement(tokenBuf, lastStyle);
      tokenBuf = token;
    }
    lastStyle = style;
  });
  pushElement(tokenBuf, lastStyle);

  return (
    <pre className={`${styles.codeBlock} cm-s-${theme}`}>
      {elements}
    </pre>
  );
};

CodeBlock.propTypes = {
  content: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.defaultProps = {
  language: 'js',
};

const Component = ({ content }) => md.render(content);

Component.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Component;
