import React from 'react';
import PropTypes from 'prop-types';
import * as merge from 'deepmerge';
import changeCase from 'change-case';
import ReactMarkdown from 'react-markdown';
import hljs from 'highlight.js';
import javascript from 'highlight.js/lib/languages/javascript';

import docs from '../../api/data.json';
import styles from './styles.module.scss';

hljs.registerLanguage('javascript', javascript);

const actions = docs.children
  .filter(({ name }) => (
    // Filter out our actions from everything else
    name.indexOf('"actions/') === 0
    && !name.includes('actions/index')
  ))
  .map(x => {
    const func = x.children.find(y => y.kindString === 'Function');
    const {
      shortText,
      tags,
      text,
    } = func.comment;
    const icon = x.children.find(y => y.name === 'icon');

    return {
      // Extract the useful information from each action
      icon: icon && icon.defaultValue,
      function: func.name,
      location: tags.find(x => x.tag === 'section').text.replace('\n', ''),
      title: tags.find(x => x.tag === 'action').text.replace('\n', ''),
      description: shortText,
      example: text,
      typedoc: x,
    };
  })
  .reduce((a, c) => (
    /**
     * Convert the module path into a nested object, for example:
     * 'content_types/sharing/system'
     * would be converted to
     * {
     *   content_types: {
     *     sharing: {
     *       system: {}, // The function information will be put here
     *     },
     *   },
     * }
     */
    merge(
      a,
      c.location
        .split('/')
        .reduceRight((a2, c2, i2, s2) => ({
          [c2]: i2 === (s2.length - 1) ? [c] : a2
        }), {}),
      {
        // Concat nested arrays, rather than overwriting them
        arrayMerge: (target, source) => target.concat(source),
      }
    )
  ), {});

const Action = ({
  description,
  example,
  func,
  title,
  icon,
}) => (
  <div className={styles.action}>
    <div className={styles[`icon-${icon}`]} />
    <div>
      {title}
    </div>
    <div className={styles.func}>
      {`${func}()`}
    </div>
    <div className={styles.description}>
      {description}
    </div>
    <ReactMarkdown
      source={example}
    />
  </div>
);

Action.propTypes = {
  description: PropTypes.string,
  example: PropTypes.string,
  func: PropTypes.string,
  icon: PropTypes.string,
};

Action.defaultProps = {
  description: 'N/A',
  example: '',
  func: 'N/A',
  icon: '70',
};

export default class extends React.Component {
  componentDidMount() {
    const preList = this.actionContainer.getElementsByTagName('pre');
    for (const node of preList) {
      hljs.highlightBlock(node);
    }
  }

  render() {
    return (
      <div
        className={styles.container}
        ref={(node) => {
          this.actionContainer = node;
        }}
      >
        {this.buildActionsList(actions)}
      </div>
    );
  }

  getTitle(str) {
    return str[0] === '_' ? '' : str;
  }

  buildActionsList(actionsObj, level = 1) {
    return (
      Object.entries(actionsObj)
        .map(([key, val]) => {
          const title = React.createElement(
            `h${level + 1}`, // h2, h3, h4, etc
            [],
            this.getTitle(key)
          );

          return Array.isArray(val) ? ( // We're at the actions array
            <div
              key={key}
              className={styles.actionGroup}
            >
              {title}
              {val.map(action => (
                <Action
                  key={action.function}
                  icon={action.icon}
                  func={action.function}
                  title={action.title}
                  description={action.description}
                  example={action.example}
                />
              ))}
            </div>
          ) : ( // Add a title, and call the function again
            <React.Fragment key={key}>
              {title}
              {this.buildActionsList(val, level + 1)}
            </React.Fragment>
          );
        })
    );
  }
}
