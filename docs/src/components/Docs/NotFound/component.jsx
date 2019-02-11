import React from 'react';
import Raw from 'raw.macro';

import Markdown from '../Markdown';

import styles from './styles.module.scss';

const content = Raw('./content.md');

export default () => (
  <div className={styles.content}>
    <Markdown
      content={content}
      source="NotFound"
    />
  </div>
);
