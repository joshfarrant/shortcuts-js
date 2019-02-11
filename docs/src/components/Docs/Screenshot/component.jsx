import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';

const classList = (classNames) => Object
  .entries(classNames)
  .map(([className, condition]) => condition && className)
  .filter(el => el)
  .join(' ');

const Component = ({ align, alt, src, ...props }) => (
  <div className={classList({
    [styles.screenshot]: true,
    [styles[align]]: align,
  })}>
    <img
      alt={alt}
      src={src}
      {...props}
    />
  </div>
);

Component.propTypes = {
  align: PropTypes.oneOf(['', 'top', 'bottom']),
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
};

Component.defaultProps = {
  align: '',
  alt: 'Screenshot',
};

export default Component;
