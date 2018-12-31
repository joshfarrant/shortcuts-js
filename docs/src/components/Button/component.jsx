import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'; // ES6

import styles from './styles.module.scss';

const Component = props => {
  if (props.href) return (
    <a
      className={props.inverted ? styles.anchorInverted : styles.anchor}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.children}
    </a>
  )

  if (props.to) return (
    <Link
      className={props.inverted ? styles.anchorInverted : styles.anchor}
      to={props.to}
    >
      {props.children}
    </Link>
  )

  return (
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
};

Component.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string,
  inverted: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

Component.defaultProps = {
  href: '',
  inverted: false,
  onClick: () => {},
  to: '',
};

export default Component;
