import React from 'react';
import PropTypes from 'prop-types'; // ES6

import iconGlyphs from './iconGlyphs';
import { colors, glyphs } from './iconOptions';

import styles from './styles.module.scss';

const classList = (classNames) => Object
  .entries(classNames)
  .map(([className, condition]) => condition && className)
  .filter(el => el)
  .join(' ');

const glyphList = {};

const glyphSections = glyphs.map(([group, icons]) => (
  [group, icons.map(([name, number]) => {
    glyphList[name] = iconGlyphs[number];
    return [name, iconGlyphs[number]];
  })]
));

const Glyph = ({ data, className, ...props }) => (
  <div
    className={classList({
      [styles.glyphIcon]: true,
      [className]: true,
    })}
    {...props}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${
        data.horizAdvX ? `${data.horizAdvX} 1280` : '1024 1150'
      }`}
    >
      <path d={data.path} />
    </svg>
  </div>
);

Glyph.propTypes = {
  data: PropTypes.object.isRequired,
};

export default class Component extends React.Component {
  state = {
    color: null,
    glyph: null,
  }

  selectColor = (color) => () => {
    this.setState({
      color: color,
      glyph: this.state.glyph || 'ROCKET',
    });
  }

  selectGlyph = (glyph) => () => {
    this.setState({
      color: this.state.color || 'DARK_BLUE',
      glyph: glyph,
    });
  }

  render() {
    return (
      <div className={styles.content}>

        <h2 className={styles.title}>
          Shortcut Icon
        </h2>

        <p>
          [WIP: a markdown parser could be a better approach to handle docs contents]
        </p>

        <h4 id="colors">Icon Colors</h4>

        <div className={styles.container}>
          <div className={styles.iconContainer}>
            {colors.map((color) => (
              <div
                key={color}
                className={classList({
                  [styles.colorIcon]: true,
                  [styles.selected]: this.state.color === color,
                })}
                onClick={this.selectColor(color)}
              >
                <div className={classList({
                  [styles.inner]: true,
                  [styles[`color--${color}`]]: true,
                })} />
              </div>
            ))}
          </div>
        </div>

        <h4 id="glyphs">Icon Glyphs</h4>

        {glyphSections.map(([group, icons]) => (
          <div
            key={group}
            className={styles.container}
          >
            <h5 className={styles.iconHeader}>{group}</h5>
            <div className={styles.iconContainer}>
              {icons.map(([name, data]) => (
                <Glyph
                  key={name}
                  data={data}
                  onClick={this.selectGlyph(name)}
                  className={classList({
                    [styles.selected]: this.state.glyph === name,
                  })}
                />
              ))}
            </div>
          </div>
        ))}

        <div className={classList({
          [styles.previewContainer]: true,
          [styles.hidden]: !this.state.glyph,
        })}>
          <div className={styles.previewBox}>

            <div className={styles.section}>
              <span>Color</span>
              <code>.{this.state.color}</code>
            </div>

            <div className={styles.section}>
              <span>Glyph</span>
              <code>.{this.state.glyph}</code>
            </div>

            {this.state.glyph && <Glyph
              data={glyphList[this.state.glyph]}
              className={classList({
                [styles.previewIcon]: true,
                [styles[`color--${this.state.color}`]]: true,
              })}
            />}

          </div>
        </div>

      </div>
    );
  }
};
