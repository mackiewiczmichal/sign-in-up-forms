import React from 'react';
import styles from './Input.module.scss';

function InputField({
  label,
  id,
  type,
  name,
  handleChange,
  errorMessage,
  isValid,
  value,
  placeholder,
}) {
  return (
    <div className={styles.inputGroup}>
      <label className={styles.inputLabel} htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={styles.input}
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {errorMessage && !isValid && (
        <p className={styles.inputError}>{errorMessage}</p>
      )}
    </div>
  );
}

export default InputField;
