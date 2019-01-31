import React from 'react';
import PropTypes from 'prop-types';

import Markdown from '../Markdown';

import data from './data.js';
import icons from './icons.js';

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

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

const CategoryList = ({ content, current, onClick }) => Object.entries(content)
  .sort(([a],[b]) => a.localeCompare(b))
  .map(([section, categories], i) => (
    <div key={i}>
      <b>{section}</b>
      {Object.entries(categories)
        .sort(([a],[b]) => a.localeCompare(b))
        .map(([category, { icon }], j) => (
          <div
            key={j}
            className={classList({
              [styles.item]: true,
              [styles.selected]: current && current.includes(`${section} > ${category}`),
            })}
            onClick={onClick(section, category)}
          >
            <Icon name={icon} />
            <span>{category}</span>
          </div>
        ))
      }
    </div>
  ));

const ActionList = ({ content, current, onClick }) => Object.entries(content)
  .sort(([a],[b]) => a.localeCompare(b))
  .map(([group, actions], i) => (
    <div key={i}>
      <b>{group}</b>
      {Object.entries(actions)
        .sort(([a],[b]) => a.localeCompare(b))
        .map(([action, id], j) => {
          const { icon, func } = data.actions[id];
          return (
            <div
              key={j}
              className={classList({
                [styles.item]: true,
                [styles.selected]: func.name.toLowerCase() === current,
              })}
              onClick={onClick(func.name)}
            >
              <Icon name={icon} />
              <span>{action}</span>
            </div>
          );
        })
      }
    </div>
  ));

export default class Component extends React.Component {
  state = {
    search: '',
    section: null,
    category: null,
  }

  listPanel = React.createRef()

  setCategory = (section, category) => () => {
    this.listPanel.current.scrollTop = 0;
    this.setState({
      section: section || null,
      category: category || null,
    });
  }

  setAction = (name) => () => {
    const path = name ? `/${name.toLowerCase()}` : '';
    this.props.history.push(`/docs/actions${path}`);
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value.replace(/[^0-9a-z.\s]/gi, ''),
    });
  }

  isSearched = (string) => {
    const search = [...this.state.search].join('.*?');
    const regex = new RegExp(search, 'i');
    return regex.test(string);
  }

  render() {
    const searchResults = {};
    const actionName = this.props.match.params.name;
    const action = actionName && data.actions
      .find(({ func }) => func.name.toLowerCase() === actionName);
    const actionCategories = action && action.sections
      .map(([section, category]) => `${section} > ${category}`);

    if (this.state.search !== '') {
      Object.values(data.sections).forEach((section) => {
        Object.entries(section).forEach(([category, groups]) => {
          if (groups.content) {
            const filteredActions = {};
            Object.values(groups.content).forEach((group) => {
              Object.entries(group).forEach(([action, id]) => {
                if (this.isSearched(action)) filteredActions[action] = id;
              });
            });
            if (Object.values(filteredActions).length > 0) {
              searchResults[category] = filteredActions;
            }
          }
        });
      });
    }

    return (
      <div className={classList({
        [styles.content]: true,
        [styles.collapsed]: actionName,
      })}>

        <div
          className={styles.listPanel}
          ref={this.listPanel}
        >
          {!this.state.category ? (
            <React.Fragment>
              <input
                type="search"
                placeholder="Search Action"
                value={this.state.search}
                onChange={this.updateSearch}
                className={styles.search}
              />

              {this.state.search === '' ? (
                <CategoryList
                  content={data.sections}
                  onClick={this.setCategory}
                  current={actionCategories}
                />
              ) : (
                <ActionList
                  content={searchResults}
                  onClick={this.setAction}
                  current={actionName}
                />
              )}
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className={styles.titleBar}>
                <h3>{this.state.category}</h3>
                <button onClick={this.setCategory()}>Back</button>
              </div>

              <ActionList
                content={data.sections[this.state.section][this.state.category].content}
                onClick={this.setAction}
                current={actionName}
              />
            </React.Fragment>
          )}
        </div>

        <div className={styles.infoPanel}>
          <h2 className={styles.title}>
            Actions
          </h2>

          {/* ----------------------- WIP ----------------------- */}
          {action && <React.Fragment>
            <h3>{action.name} <code>{action.func.name}()</code></h3>

            <p>{action.description}</p>
            <Markdown content={action.comment} />

            <h4>Parameters</h4>
            {action.func.parameters ? (
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {action.func.parameters.map((parameter, i) => (
                    <tr key={i}>
                      <td>
                        <b>{parameter.name}</b>
                        {parameter.default && '?'}
                      </td>
                      <td>{parameter.type}</td>
                      <td>{parameter.default && <code>{parameter.default}</code>}</td>
                      <td>{parameter.comment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>None</p>
            )}

            <h4>Has Action Output?</h4>
            <p>{action.func.hasOutput ? 'Yes' : 'No'}</p>

            <h4>Source</h4>
            <p>
              <code>
                <a
                  href={`https://github.com/joshfarrant/shortcuts-js/blob/master/src/${action.func.source}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {action.func.source}
                </a>
              </code>
            </p>

            {actionName && (
              <button onClick={this.setAction()}>
                GO BACK TO ACTION LIST
              </button>
            )}
          </React.Fragment>}
          {/* --------------------- END WIP --------------------- */}

        </div>

      </div>
    );
  }
};

export { Icon };
