import React from 'react';
import PropTypes from 'prop-types';

import { Controlled as CodeMirror } from 'react-codemirror2';
import 'codemirror/mode/javascript/javascript';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import styles from './styles.module.scss';

const Component = props => (
  <div className={styles.container}>
    <CodeMirror
      className={styles.editor}
      value={props.value}
      onBeforeChange={(editor, data, value) => {
        props.onChange(value);
      }}
      options={{
        lineNumbers: true,
        lineWrapping: true,
        mode: 'javascript',
        theme: 'dracula',
      }}
    />
  </div>
);

Component.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Component.defaultProps = {
  value: '// Write some code!',
};

export default Component;
