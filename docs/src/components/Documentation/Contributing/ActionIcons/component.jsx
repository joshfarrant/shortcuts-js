import React from 'react';
import Raw from 'raw.macro';

import Markdown from '../../Markdown';

import { Icon } from '../../Actions';
import icons from '../../Actions/icons.js';

import styles from './styles.module.scss';

const content = Raw('./content.md');

export default () => (
  <div className={styles.content}>
    <Markdown content={content} />

    <div className={styles.iconList}>
      {icons
        .concat(['Calendar'])
        .sort((a,b) => a.localeCompare(b))
        .map((icon) => (
          <div
            className={styles.item}
            key={icon}
          >
            <Icon
              key={icon}
              name={icon}
            />
            <code>{icon}</code>
          </div>
        )
      )}
    </div>
  </div>
);
