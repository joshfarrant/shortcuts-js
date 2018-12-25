import React from 'react';
import PropTypes from 'prop-types'; // ES6

import glyphs from './glyphs';
import gist from './gist';

import styles from './styles.module.scss';

const Glyph = props => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox={`0 0 ${
      props.data.horizAdvX ? `${props.data.horizAdvX} 1280` : '1024 1150'
    }`}
    className={[styles.glyphIcon, props.className].join(' ')}
  >
    <path d={props.data.path} />
  </svg>
);

Glyph.propTypes = {
  data: PropTypes.object.isRequired,
};

const glyphSections = gist.map(([group, icons]) => (
  [group, icons.map(([name, number]) => (
    [name, Object.values(glyphs).filter((glyph) => glyph.number === number)[0]]
  ))]
))

export default () => (
  <div className={styles.container}>

    <h1>Metadata</h1>

    <h2>Colors</h2>
    <p>[WIP]</p>

    <h2>Glyphs</h2>
    <p>[WIP]</p>

    {glyphSections.map(([group, icons]) => (
      <div className={styles.glyphSection} key={group}>
        <h4>{group}</h4>
        <div className={styles.glyphContainer}>
          {icons.map(([name, data]) => (
            <Glyph data={data} key={data.number} className={!name && styles.unnamed} />
          ))}
        </div>
      </div>
    ))}

  </div>
);
