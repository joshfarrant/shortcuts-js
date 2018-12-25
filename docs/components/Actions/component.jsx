import React from 'react';
import PropTypes from 'prop-types'; // ES6

import sections from './sections.js';

import styles from './styles.module.scss';

const Action = props => (
  <div className={styles.action}>
    <div className={styles[`icon-${props.icon}`]}></div>
    <span>{props.children}</span>
    <span className={styles.func}>{props.func}</span>
  </div>
);

Action.propTypes = {
  children: PropTypes.node.isRequired,
  icon: PropTypes.number.isRequired,
  func: PropTypes.string.isRequired,
};

Action.defaultProps = {
  icon: 0,
  func: 'N/A',
};

// this is just a mockup, function names will be fetched from the TypeDocs exported .json
const capitalize = ([s, ...tring]) => [s.toUpperCase(), ...tring].join('');
const actionFunction = name => name.match(/(\w+)/g).map((word, i) => {
  if (word.toUpperCase() === word) return word
  return i == 0 ? word.toLowerCase() : capitalize(word)
}).join('');

export default () => (
  <div className={styles.container}>

    {sections.map(([section, categories], i) => (
      <div key={i}>
        <h2>{section}</h2>
        {categories.map(([category, groups], j) => (
          <div key={j}>
            <h3>{category}</h3>
            {groups.map(([group, actions], k) => (
              <div key={k}>
                <h4 className={styles.actionGroup}>{group}</h4>
                {actions.map(([icon, action], l) => (
                  <Action icon={icon} func={`${actionFunction(action)}()`} key={l}>
                    {action}
                  </Action>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    ))}

  </div>
);
