import React from 'react';

import styles from './styles.module.scss';

import headshot from './headshot.jpg';

export default () => (
  <div className={styles.container}>
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src={headshot}
        alt="Josh Farrant profile"
      />
    </div>
    <div className={styles.textContainer}>
      <h3>
        Created with
        <span
          role="img"
          aria-label="Blue Heart Emoji"
        >
          {' 💙 '}
        </span>
        by Josh Farrant
      </h3>
      <p>
        Hi!
        Thanks for checking out Shortcuts JS.
        I built this library out of frustration with Apple&apos;s Shortcuts app, as I found
        complex Shortcuts were difficult to manage using its drag-and-drop interface.
        I wanted to write Shortcuts the same way I write code, so I created Shortcuts JS.
      </p>
      <p>
        <a
          href="https://medium.com/@JoshFarrant/creating-ios-12-shortcuts-with-javascript-and-shortcuts-js-942420ca9904"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more about Shortcuts JS on Medium.
        </a>
      </p>
    </div>
  </div>
);
