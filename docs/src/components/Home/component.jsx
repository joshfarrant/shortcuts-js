import React from 'react';

import fetch from 'isomorphic-fetch';
import { Progress } from 'react-sweet-progress';

import AboutTheAuthor from '../AboutTheAuthor';
import Contributors from '../Contributors';
import Footer from '../Footer';
import Jumbotron from '../Jumbotron';
import ShortcutCreator from '../ShortcutCreator';

import 'react-sweet-progress/lib/style.css';
import styles from './styles.module.scss';

export default class Component extends React.Component {
  state = {
    fetchingStatsFailed: true,
    implementedActions: null,
    implementedPercent: 0,
    totalActions: null,
  }

  componentDidMount() {
    this.fetchActionStats();
  }

  fetchActionStats = async () => {
    try {
      const url = 'https://api.github.com/repos/joshfarrant/shortcuts-js/issues/6';
      const res = await fetch(url);
      const { body } = await res.json();

      // Matches '- [ ]' and '- [x]'
      const totalActions = body.match(/^-\s\[[\sx]\]/gm).length;

      // Matches '- [x]'
      const implementedActions = body.match(/^-\s\[x\]/gm).length;

      this.setState({
        totalActions,
        implementedActions,
        implementedPercent: Math.floor((implementedActions / totalActions) * 1000) / 10,
        fetchingStatsFailed: false,
      });
    } catch {
      this.setState({
        fetchingStatsFailed: true,
      });
    }
  }

  render() {
    return (
      <div className={styles.container}>
        <Jumbotron />

        <div className={styles.verticalSplit}>
          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              What is Shortcuts JS?
            </h2>
            <div className={styles.sectionContent}>
              <p>
                Shortcuts JS lets you build Shortcuts more efficiently by allowing you
                to leverage all of the features of JavaScript to generate a Shortcut,
                allowing you to create complex Shortcuts more quickly and more easily
                than ever before.
              </p>
              <p>
                <a
                  href="https://github.com/joshfarrant/shortcuts-js/blob/master/README.md#further-examples"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Take a look at some examples.
                </a>
              </p>
              {!this.state.fetchingStatsFailed && (
                <div className={styles.progressContainer}>
                  <div className={styles.progressWrapper}>
                    <div className={styles.progressMessage}>
                      <h3 className={styles.progressTitle}>
                        Available Actions
                      </h3>
                      So far, the community has implemented
                      <strong>{` ${this.state.implementedActions} `}</strong>
                      of Apple&apos;s
                      {` ${this.state.totalActions} `}
                      built-in actions.
                      {' '}
                      <a
                        href="https://github.com/joshfarrant/shortcuts-js/issues/6"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        See the list.
                      </a>
                    </div>
                    <Progress
                      type="circle"
                      strokeWidth={8}
                      className={styles.progress}
                      percent={this.state.implementedPercent}
                      status={this.state.implementedPercent === 100 ? 'success' : ''}
                      theme={{
                        success: {
                          color: 'var(--yellow-colour)',
                          symbol: '🎉',
                        },
                        default: {
                          color: 'url(#linear)',
                          trailColor: 'var(--lighter-grey-colour)',
                        },
                        active: {
                          color: 'url(#linear)',
                          trailColor: 'var(--lighter-grey-colour)',
                        },
                      }}
                    />
                    <svg width="0" height="0">
                      <defs>
                        <linearGradient id="linear" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--pink-colour)" />
                          <stop offset="100%" stopColor="var(--aqua-colour)" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
              )}
              <p>
                If you want to help Shortcuts JS improve, please consider contributing to the project.
                You don&apos;t even need to be a developer to help!
              </p>
              <p>
                If you&apos;ve never contributed to an Open Source project before,
                then this is a great place to start!
                We&apos;re a very welcoming community and are more than
                happy to help you get started.
              </p>
              <p>
                <a
                  href="https://github.com/joshfarrant/shortcuts-js/blob/master/README.md#is-the-action-you-want-not-available"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Find out how to contribute.
                </a>
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}>
              Playground
            </h2>
            <div className={styles.sectionContent}>
              <ShortcutCreator />
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.fullWidth}>
          <AboutTheAuthor />
        </div>

        <hr />

        <div className={styles.fullWidth}>
          <Contributors />
        </div>

        <Footer />
      </div>
    );
  }
}
