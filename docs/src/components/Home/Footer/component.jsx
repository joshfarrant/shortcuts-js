import React from 'react';

import styles from './styles.module.scss';

export default () => (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <small>
        Released under the&nbsp;
        <a
          className={styles.link}
          href="https://github.com/joshfarrant/shortcuts-js/blob/master/LICENSE"
          target="_blank"
          rel="noopener noreferrer"
        >
          GNU General Public License v3&#46;0
        </a>
      </small>
      <small>
        &copy;
        {` ${(new Date()).getFullYear()} `}
        <a
          className={styles.link}
          href="https://farrant.me"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Farrant
        </a>
      </small>
    </div>
  </div>
);
