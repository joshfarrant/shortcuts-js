import React from 'react';

import contributors from '../../../contributors.json';

import styles from './styles.module.scss';

export default () => (
  <div className={styles.container}>
    <h3 className={styles.heading}>
      Contributors
    </h3>
    <div className={styles.innerContainer}>
      <div className={styles.textContainer}>
        <p>
          Thank you to everyone who has given their time to help improve Shortcuts JS.
          Whether that&apos;s reporting a bug, requesting a feature, suggesting an action,
          or submitting a Pull Request, you&apos;ve all played a part in making Shortcuts JS
          better. Special thanks goes to those developers who&apos;ve had Pull Requests
          merged into the library.
        </p>
      </div>
      <ul className={styles.list}>
        {contributors.map(name => (
          <li
            key={name}
            className={styles.listItem}
          >
            <a
              href={`https://github.com/${name}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {`@${name}`}
            </a>
          </li>
        ))}
      </ul>
    </div>
  </div>
);
