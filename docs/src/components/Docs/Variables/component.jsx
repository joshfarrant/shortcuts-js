import React from 'react';
import Raw from 'raw.macro';

import Markdown from '../Markdown';
import Screenshot from '../Screenshot';

import styles from './styles.module.scss';

import screenshot00 from './screenshot00.png';
import screenshot01 from './screenshot01.png';
import screenshot02 from './screenshot02.png';

const content = Raw('./content.md');

export default () => (
  <div className={styles.content}>
    <Markdown
      content={content}
      source="Variables"
    >
      <section />

      <div className={styles.center}>
        <Screenshot src={screenshot00} />
      </div>

      <section />

      <div className={styles.center}>
        <Screenshot src={screenshot01} align="top" />
        <Screenshot src={screenshot02} align="top" />
      </div>

      <section />
    </Markdown>
  </div>
);
