import React from 'react';
import { Route } from 'react-router';

import Documentation from '../Documentation';
import Home from '../Home';

import styles from './styles.module.scss';

export default class Component extends React.Component {
  render() {
    return (
      <div className={styles.container}>

        <Route path="/" exact component={Home} />
        <Route path="/docs/" component={Documentation} />

      </div>
    );
  }
}
