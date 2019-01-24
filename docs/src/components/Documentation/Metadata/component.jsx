import React from 'react';

import Markdown from '../Markdown';
import pageContent from './content.md';

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
          Metadata
        </h2>

        <Markdown content={this.state.content} />
      </div>
    );
  }
};
