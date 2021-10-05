import React from 'react';
import Input from '../../../components/Input/Input';

import {
  requiredRule,
  minLengthRule,
  maxLengthRule,
  passwordMatchRule,
  correctEmail,
  validFullName,
} from './inputValidationRules';

function createFormFieldConfig(
  id,
  label,
  name,
  type,
  placeholder,
  defaultValue = ''
) {
  return {
    renderInput: (handleChange, value, isValid, error, key) => {
      return (
        <Input
          id={id}
          key={key}
          name={name}
          type={type}
          label={label}
          placeholder={placeholder}
          isValid={isValid}
          value={value}
          handleChange={handleChange}
          errorMessage={error}
        />
      );
    },
    id,
    label,
    value: defaultValue,
    valid: false,
    errorMessage: '',
    touched: false,
  };
}

export const signupForm = {
  name: {
    ...createFormFieldConfig(
      'fullName',
      'Full Name',
      'name',
      'text',
      'Full name'
    ),
    validationRules: [
      requiredRule('name'),
      minLengthRule('name', 3),
      maxLengthRule('name', 25),
      validFullName(),
    ],
  },
  email: {
    ...createFormFieldConfig(
      'emailAddress',
      'Email',
      'email',
      'email',
      'Full name'
    ),
    validationRules: [
      requiredRule('email'),
      minLengthRule('email', 8),
      maxLengthRule('email', 25),
      correctEmail(),
    ],
  },
  password: {
    ...createFormFieldConfig(
      'passsword',
      'Password',
      'password',
      'password',
      'Password'
    ),
    validationRules: [
      requiredRule('password'),
      minLengthRule('password', 8),
      maxLengthRule('password', 20),
    ],
  },
  confirmPassword: {
    ...createFormFieldConfig(
      'passwordConfirm',
      'Confirm Password',
      'confirmPassword',
      'password',
      'Confirm password'
    ),
    validationRules: [passwordMatchRule()],
  },
};

export const signinForm = {
  email: {
    ...createFormFieldConfig('email', 'Email', 'email', 'email', 'Email'),
    validationRules: [
      requiredRule('email'),
      minLengthRule('email', 10),
      maxLengthRule('email', 25),
      correctEmail(),
    ],
  },
  password: {
    ...createFormFieldConfig(
      'password',
      'Password',
      'password',
      'password',
      'Password'
    ),
    validationRules: [
      requiredRule('password'),
      minLengthRule('password', 8),
      maxLengthRule('password', 20),
    ],
  },
};
