import React from 'react';
import PropTypes from 'prop-types'; // ES6

import styles from './styles.module.scss';

const Component = props => (
  props.href ? (
    <a
      className={props.inverted ? styles.anchorInverted : styles.anchor}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  ) : (
    <button
      className={props.inverted ? styles.buttonInverted : styles.button}
      type="button"
      onClick={props.onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </button>
  )
);

Component.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
};

Component.defaultProps = {
  href: '',
  inverted: false,
  onClick: () => {},
};

export default Component;
