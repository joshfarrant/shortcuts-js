import React from 'react';
// import { Route } from 'react-router';
// import { HashLink as Link, NavHashLink as NavLink } from 'react-router-hash-link';

import { icons, sections } from './icons.js';

import styles from './styles.module.scss';

const classList = (classNames) => Object
  .entries(classNames)
  .map(([className, condition]) => condition && className)
  .filter(el => el)
  .join(' ');

const Icon = ({ name }) => {
  if (name === 'Calendar') {
    const [day, weekday] = new Date().toLocaleDateString('en-US', {
      weekday: 'long',
      day: 'numeric',
    }).split(' ');

    return (
      <div className={classList({
        [styles.icon]: true,
        [styles['i-calendar']]: true,
      })}>
        <span>{weekday}</span>
        <span>{day}</span>
      </div>
    );
  }

  let index = icons.indexOf(name);
  if (index === -1) index = icons.indexOf('Placeholder');

  return (
    <div className={classList({
      [styles.icon]: true,
      [styles[`i-${index}`]]: true,
    })} />
  );
};

const ItemList = ({ sections, onClick, ...props }) => (
  sections.map(([section, items], i) => (
    <div key={i}>
      <b>{section}</b>
      {items.map(([icon, label], j) => (
        <div
          key={j}
          className={styles.item}
          onClick={onClick(i,j)}
          {...props}
        >
          <Icon name={icon} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  ))
);

export default class Component extends React.Component {
  state = {
    search: '',
    currentAction: null,
    currentCategory: null,
  }

  listPanel = React.createRef()

  setCategory = (section, category) => () => {
    this.listPanel.current.scrollTop = 0;
    this.setState({
      currentCategory: section === undefined ? null : [section, category],
    });
  }

  setAction = (group, action) => () => {
    // FIXME: WIP
    console.log(group, action)
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value,
    });
  }

  isSearched = (string) => {
    const search = this.state.search.toLowerCase();
    const regex = new RegExp(search.split('').join('.*?'));
    return regex.test(string.toLowerCase());
  }

  render() {
    // FIXME: WIP
    let searchResults = [];
    if (this.state.search !== '') {
      sections.forEach(([, categories]) => {
        categories.forEach(([, category, groups]) => {
          let filteredActions = [];
          groups.forEach(([, actions]) => {
            filteredActions = filteredActions.concat(
              actions.filter(([, action]) => this.isSearched(action))
            );
          });
          if (filteredActions.length > 0) searchResults.push([category, filteredActions]);
        });
      });
    }

    // FIXME: WIP
    let currentCategory;
    if (this.state.currentCategory !== null) {
      const [section, category] = this.state.currentCategory;
      const [, name, groups] = sections[section][1][category];
      currentCategory = { name, groups };
    }

    return (
      <div className={styles.content}>

        <div
          className={styles.listPanel}
          ref={this.listPanel}
        >
          {!currentCategory ? (
            <React.Fragment>
              <input
                type="search"
                placeholder="Search Action"
                value={this.state.search}
                onChange={this.updateSearch}
                className={styles.search}
              />

              {this.state.search === '' ? (
                <ItemList
                  sections={sections}
                  onClick={this.setCategory}
                />
              ) : (
                <ItemList
                  sections={searchResults}
                  onClick={() => () => console.log('WIP')}
                />
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={styles.titleBar}>
                <h2>{currentCategory.name}</h2>
                <button onClick={this.setCategory()}>Back</button>
              </div>

              <ItemList
                sections={currentCategory.groups}
                onClick={this.setAction}
              />
            </React.Fragment>
          )}
        </div>

        <div className={styles.infoPanel}>
          <h2 className={styles.title}>
            Actions
          </h2>

          <p>[WIP: action details]</p>
        </div>

      </div>
    );
  }
};

export { Icon };
