import React from 'react';
import { Route } from 'react-router';

import Contributors from '../Contributors';
import Footer from '../Footer';
import Jumbotron from '../Jumbotron';

import styles from './styles.module.scss';

export default class Component extends React.Component {
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
              {/* actions progress fetch */}
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
              {/* <ShortcutCreator /> */}
            </div>
          </div>
        </div>

        <hr />

        <div className={styles.fullWidth}>
          {/* <AboutTheAuthor /> */}
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
