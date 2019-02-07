import React from 'react';
import GitHubButton from 'react-github-button';

import Button from '../Button';

import 'react-github-button/assets/style.css';
import styles from './styles.module.scss';

const badges = [{
  alt: 'GitHub license',
  href: 'https://github.com/joshfarrant/shortcuts-js/blob/master/LICENSE',
  src: 'https://img.shields.io/badge/license-GPL-blue.svg',
}, {
  alt: 'npm version',
  href: 'https://www.npmjs.com/package/@joshfarrant/shortcuts-js',
  src: 'https://img.shields.io/npm/v/@joshfarrant/shortcuts-js.svg?colorB=blue',
}, {
  alt: 'Coverage Status',
  href: 'https://coveralls.io/github/joshfarrant/shortcuts-js?branch=master',
  src: 'https://coveralls.io/repos/github/joshfarrant/shortcuts-js/badge.svg?branch=master',
}, {
  alt: 'Build Status',
  href: 'https://travis-ci.org/joshfarrant/shortcuts-js',
  src: 'https://img.shields.io/travis/joshfarrant/shortcuts-js/master.svg',
}, {
  alt: 'PRs Welcome',
  href: 'https://github.com/joshfarrant/shortcuts-js/blob/master/CONTRIBUTING.md',
  src: 'https://img.shields.io/badge/PRs-welcome-blue.svg',
}, {
  alt: 'Discord',
  href: 'https://discord.gg/pyvcYbB',
  src: 'https://img.shields.io/discord/537267258922237954.svg?label=Discord&logo=discord&style=flat',
}];

export default () => (
  <div className={styles.container}>
    <div className={styles.headingContainer}>

      <h1 className={styles.heading}>
        Shortcuts JS
        <span
          role="img"
          aria-label="Genie Emoji"
        >
          {' 🧞‍♂️'}
        </span>
      </h1>
      <h3 className={styles.subheading}>
        Build Apple Shortcuts using JavaScript
      </h3>

      <div className={styles.buttonContainer}>
        <Button href="https://github.com/joshfarrant/shortcuts-js">
          GitHub
        </Button>
        <Button to="/docs">
          Documentation
        </Button>
      </div>

    </div>
    <div className={styles.banner}>
      {badges.map(x => (
        <a
          className={styles.badge}
          key={x.src}
          href={x.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={x.src}
            alt={x.alt}
          />
        </a>
      ))}
      <span className={styles.github}>
        <GitHubButton
          type="stargazers"
          side="default"
          namespace="joshfarrant"
          repo="shortcuts-js"
        />
      </span>
    </div>
  </div>
);
