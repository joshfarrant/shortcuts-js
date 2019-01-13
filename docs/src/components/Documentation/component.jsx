import React from 'react';
import { Route } from 'react-router';
import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link';

// import Actions from '../Actions';
// import Metadata from '../Metadata';
import MetadataIcon from '../MetadataIcon';

import styles from './styles.module.scss';

const classList = (classNames) => Object
  .entries(classNames)
  .map(([className, condition]) => condition && className)
  .filter(el => el)
  .join(' ');

const menuItems = [
  ['Getting Started', '/docs', [
    ['Installation', '#installation'],
    ['Usage', '#usage'],
  ]],
  ['Examples', '/docs/examples', []],
  ['Variables', '/docs/variables', [
    ['Named Variables', '#named'],
    ['Magic Variables', '#magic'],
    ['Global Variables', '#global'],
    ['Local Variables', '#local'],
    [(
      <React.Fragment>
        <code>with()</code> method
      </React.Fragment>
    ), '#with'],
  ]],
  ['Actions', '/docs/actions', []],
  ['Metadata', '/docs/metadata', [
    ['Build options', '#build-options'],
    ['Shortcut Icon', '/icon'],
  ]],
  ['Contributing', '/docs/contributing', [
    ['Design Principles', '#design-principles'],
    ['Testing', '#testing'],
    ['Action Icons', '/action-icons'],
  ]],
];

class MenuItem extends React.Component {
  isActive(path) {
    return (match, location) => path === `${location.pathname}${location.hash}`;
  }

  render() {
    const { to: path, ...rest } = this.props;

    return (
      <NavLink
        activeClassName={styles.active}
        isActive={this.isActive(path)}
        to={path}
        {...rest}
      />
    );
  }
}

class Menu extends React.Component {
  render() {
    return (
      <div
        className={styles.menu}
        {...this.props}
      >
        <ul>
          {menuItems.map(([item, path, children], i) => (
            <li key={i}>
              <MenuItem
                className={styles.menuItem}
                to={path}
              >
                {item}
              </MenuItem>
              {children.length > 0 && <ul>
                {children.map(([child, subpath], j) => (
                  <li key={j}>
                    <MenuItem
                      className={styles.submenuItem}
                      to={`${path}${subpath}`}
                    >
                      {child}
                    </MenuItem>
                  </li>
                ))}
              </ul>}
            </li>
          ))}
        </ul>
        <ul>
          {[
            ['API Reference', 'https://docs.shortcuts.fun/globals.html'],
            ['GitHub', 'https://github.com/joshfarrant/shortcuts-js'],
          ].map(([item, url]) => (
            <li key={url}>
              <a
                className={styles.menuItem}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default class Component extends React.Component {
  state = {
    menuShown: false,
  }

  toggleMenu = (to) => () => {
    this.setState({
      menuShown: to === undefined ? !this.state.menuShown : to,
    });
  }

  render() {
    return (
      <div className={classList({
        [styles.container]: true,
        [styles.menuShown]: this.state.menuShown,
      })}>

        <div className={styles.navbar}>
          <div className={styles.textContainer}>
            <Link to="/" className={styles.logo}>
              Shortcuts JS
            </Link>
            <Link to="/docs" className={styles.soft}>
              Docs
            </Link>

            <div
              className={classList({
                [styles.menuIcon]: true,
                [styles.close]: this.state.menuShown,
              })}
              onClick={this.toggleMenu()}
            >
              <span />
            </div>
          </div>
        </div>

        <Menu onClick={this.toggleMenu(false)} />

        <div className={styles.content}>
          {/* <Route path="/docs/actions" component={Actions} /> */}
          {/* <Route path="/docs/metadata" component={Metadata} /> */}
          <Route path="/docs/metadata/icon" component={MetadataIcon} />
        </div>

      </div>
    );
  }
};
