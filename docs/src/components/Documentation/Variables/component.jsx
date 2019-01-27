import React from 'react';

import Markdown from '../Markdown';
import pageContent from './content.md';

import styles from './styles.module.scss';

import screenshot00 from './screenshot00.png';
import screenshot01 from './screenshot01.png';
import screenshot02 from './screenshot02.png';

const images = {
  'screenshot00.png': screenshot00,
  'screenshot01.png': screenshot01,
  'screenshot02.png': screenshot02,
};

export default class Component extends React.Component {
  state = {
    content: null,
  }

  async componentDidMount() {
    const content = await (await fetch(pageContent)).text();

    this.setState({
      content: content.replace(
        /(?:\]\()\.\/(.*?)(?:\))/g,
        (match, path) => `](${images[path]})`,
      ),
    });
  }

  render() {
    return this.state.content && (
      <div className={styles.content}>
        <Markdown content={this.state.content} />
      </div>
    );
  }
};
