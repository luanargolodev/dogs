import React from 'react';

import styles from './styles.module.css';

const Input = ({ label, type, name }) => {
  return (
    <div className={styles.wrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input id={name} name={name} type={type} className={styles.input} />
      <p className={styles.error}>Error</p>
    </div>
  );
};

export default Input;
