import React from 'react';

import Markdown from '../../Markdown';
import pageContent from './content.md';

import { Icon } from '../../Actions';
import icons from '../../Actions/icons.js';

import styles from './styles.module.scss';

export default class Component extends React.Component {
  state = {
    content: null,
  }

  async componentDidMount() {
    this.setState({
      content: await (await fetch(pageContent)).text(),
    });
  }

  render() {
    return this.state.content && (
      <div className={styles.content}>
        <h2 className={styles.title}>
          Action Icons
        </h2>

        <Markdown content={this.state.content} />

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
  }
};
