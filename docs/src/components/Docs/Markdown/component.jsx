import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Glyph } from '../Metadata/ShortcutIcon';
import iconGlyphs from '../Metadata/ShortcutIcon/iconGlyphs.js';

import Remarkable from 'remarkable';
import RemarkableRenderer from 'remarkable-react';
import CodeMirror from 'codemirror';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/meta';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import styles from './styles.module.scss';

const md = new Remarkable();

const innerText = (children) => {
  if (
    children === null ||
    children === undefined ||
    typeof children === typeof true
  ) return '';

  if (typeof children === typeof 0) return `${children}`;

  if (typeof children === typeof '') return children;

  if (Array.isArray(children)) return children
    .reduce((result, child) => `${result} ${innerText(child)}`, '');

  if (
    children.props &&
    children.props.children
  ) return innerText(children.props.children);

  return '';
};

md.renderer = new RemarkableRenderer({
  components: {
    a: ({ children, href }) => (
      href.startsWith('http') ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ) : (
        <Link to={href}>
          {children}
        </Link>
      )
    ),
    h1: ({ children }) => (
      <Heading level={1}>{children}</Heading>
    ),
    h2: ({ children }) => (
      <Heading level={2}>{children}</Heading>
    ),
    h3: ({ children }) => (
      <Heading level={3}>{children}</Heading>
    ),
    h4: ({ children }) => (
      <Heading level={4}>{children}</Heading>
    ),
    h5: ({ children }) => (
      <Heading level={5}>{children}</Heading>
    ),
    h6: ({ children }) => (
      <Heading level={6}>{children}</Heading>
    ),
    img: ({ src, alt }) => (
      <img alt={alt} src={src} />
    ),
    pre: ({ content, params: language }) => (
      <CodeBlock
        content={content}
        language={language}
      />
    ),
    table: ({ children }) => (
      <div className={styles.table}>
        <table>{children}</table>
      </div>
    ),
  },
});

const Heading = ({ children, level }) => {
  const Tag = `h${level}`;

  const anchor = innerText(children)
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .trim()
    .replace(/\s+/g, '-');

  const handleScroll = (element) => {
    const { hash } = window.location;
    if (
      hash !== '' &&
      element &&
      element.id === hash.substr(1)
    ) element.scrollIntoView();
  };

  return (
    <Tag
      id={anchor}
    	ref={handleScroll}
      className={styles.heading}
    >
      <Link
        className={styles.link}
        to={`#${anchor}`}
      >
        #
      </Link>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
};

const CodeBlock = ({ content, language }) => {
  const theme = 'dracula';
  const elements = [];

  let index = 0;
  let tokenBuf = '';
  let lastStyle = null;

  const pushElement = (token, style) => elements.push(
    <span
      className={style && `cm-${style}`}
      key={++index}
    >
      {token}
    </span>
  );

  const mode = CodeMirror.findModeByName(language);
  CodeMirror.runMode(content, mode ? mode.mime : language, (token, style) => {
    if (lastStyle === style) {
      tokenBuf += token;
    } else {
      if (tokenBuf) pushElement(tokenBuf, lastStyle);
      tokenBuf = token;
    }
    lastStyle = style;
  });
  pushElement(tokenBuf, lastStyle);

  return (
    <pre className={`${styles.codeBlock} cm-s-${theme}`}>
      {elements}
    </pre>
  );
};

CodeBlock.propTypes = {
  content: PropTypes.string.isRequired,
  language: PropTypes.string,
};

CodeBlock.defaultProps = {
  language: 'js',
};

const Component = ({ children, content, source }) => {
  const repo = 'joshfarrant/shortcuts-js/blob/master';
  const path = `https://github.com/${repo}/docs/src/components/Docs/${source}/content.md`;
  const button = source && (
    <a
      className={styles.editPage}
      key="EDIT_PAGE"
      href={path}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Glyph
        data={iconGlyphs[0xE996]}
        className={styles.icon}
      />
      EDIT PAGE
    </a>
  );

  if (!children) return [button, ...md.render(content)];

  const sections = content.split(/^---$/m);
  return [button, ...children
    .map((child) => child.type === 'section' ? md.render(sections.shift()) : child)
  ];
}

Component.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Component;
