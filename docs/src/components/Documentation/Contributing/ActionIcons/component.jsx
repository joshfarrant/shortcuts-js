import React from 'react';

import { Icon } from '../../Actions';
import { icons } from '../../Actions/icons.js';

// import styles from './styles.module.scss';

// FIXME: WIP UI
export default () => (
  <div>
    {icons
      .concat(['Calendar'])
      .sort((a,b) => a.localeCompare(b))
      .map((icon) => (
        <div key={icon}>
          <Icon
            key={icon}
            name={icon}
          />
          {icon}
        </div>
      )
    )}
  </div>
);
