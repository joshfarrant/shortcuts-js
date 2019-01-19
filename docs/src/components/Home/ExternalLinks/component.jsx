import React from 'react';

import atpArtwork from './atp-artwork.jpg';
import clubMacstories from './club-macstories.svg';

import styles from './styles.module.scss';

export default () => (
  <div className={styles.container}>
    <h3 className={styles.heading}>
      Around the web
    </h3>
    <div className={styles.innerContainer}>
      <a
        className={styles.link}
        href="http://atp.fm/episodes/305"
        target="_blank"
        rel="noopener noreferrer"
        title="Episode 305, 00:14:52"
      >
        <img
          className={styles.atpArt}
          src={atpArtwork}
          alt="ATP show artwork"
        />
      </a>
      <a
        className={styles.link}
        href="https://club.macstories.net/"
        target="_blank"
        rel="noopener noreferrer"
        title="Issue 152, Friday 16 November"
      >
        <img
          className={styles.macstoriesArt}
          src={clubMacstories}
          alt="Club Macstories"
        />
      </a>
      <a
        className={styles.javascriptWeeklyLink}
        href="https://javascriptweekly.com/issues/413"
        target="_blank"
        rel="noopener noreferrer"
        title="Issue 413, Friday 23 November"
      >
        JavaScript Weekly
      </a>
    </div>
  </div>
);
