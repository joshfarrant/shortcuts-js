import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';

// import Actions from '../Actions';
// import Metadata from '../Metadata';

import styles from './styles.module.scss';

const Navbar = () => (
  <div className={styles.navbar}>
    <div className={styles.textContainer}>
      <Link to="/" className={styles.logo}>
        Shortcuts JS
      </Link>
      <Link to="/docs/" className={styles.soft}>
        Docs
      </Link>
    </div>
  </div>
);

const menuItems = [
  ['Introduction', '/docs/'],
  ['Examples', '/docs/examples/'],
  ['Variables', '/docs/variables/'],
  ['Actions', '/docs/actions/'],
  ['Metadata', '/docs/metadata/'],
  ['Dev Resources', '/docs/dev/'],
];

const Menu = () => (
  <div className={styles.menu}>
    <ul>
      {menuItems.map(([item, path], i) => (
        <li key={i}>
          <Link to={path}>{item}</Link>
        </li>
      ))}
    </ul>
    <ul>
      <li>
        <a
          href="https://docs.shortcuts.fun/globals.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          API Reference
        </a>
      </li>
    </ul>
  </div>
);

export default () => (
  <div className={styles.container}>
    <Navbar />
    <Menu />

    <div className={styles.content}>
      {/* <Route path="/docs/actions/" component={Actions} /> */}
      {/* <Route path="/docs/metadata/" component={Metadata} /> */}
    </div>

  </div>
);
