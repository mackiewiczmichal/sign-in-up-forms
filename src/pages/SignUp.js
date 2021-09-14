import React, { useState, useEffect, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import validateForm from '../utils/validateForm';
import { motion } from 'framer-motion';

export default function SignUp() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const history = useHistory();
  const [errors, setErrors] = useState({});
  const firstUpdate = useRef(true);
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors(validateForm(formValues));
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }
    setErrors(validateForm(formValues));
    return;
  }, [formValues]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validateForm(formValues));
    setDataIsCorrect(true);
    if (Object.keys(errors).length === 0 && dataIsCorrect) {
      history.push('/success');
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className='form'>
        <h1 className='form__heading'>Sign up</h1>
        <form autoComplete='off' onSubmit={(e) => onFormSubmit(e)}>
          <div className='form__group'>
            <label className={'form__group__label'} htmlFor='email'>
              Email
            </label>
            <input
              name='email'
              className={`form__group__input ${
                errors.email && 'form__group__input--error'
              }`}
              id='email'
              placeholder='Enter email'
              value={formValues.email}
              onChange={(e) => handleChange(e)}
            />
            {errors.email && (
              <p className='form__group__feedback-error'>{errors.email}</p>
            )}
          </div>
          <div className='form__group'>
            <label htmlFor='email'>Full name</label>
            <input
              name='fullName'
              className={`form__group__input ${
                errors.fullName && 'form__group__input--error'
              }`}
              id='fullName'
              placeholder='Enter Full name'
              value={formValues.fullName}
              onChange={(e) => handleChange(e)}
            />
            {errors.fullName && (
              <p className='form__group__feedback-error'>{errors.fullName}</p>
            )}
          </div>
          <div className='form__group'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              className={`form__group__input ${
                errors.password && 'form__group__input--error'
              }`}
              id='password'
              placeholder='Enter password'
              value={formValues.password}
              onChange={(e) => handleChange(e)}
            />
            {errors.password && (
              <p className='form__group__feedback-error'>{errors.password}</p>
            )}
          </div>
          <div className='form__group'>
            <label htmlFor='passwordConfirm'>Password confirm</label>
            <input
              type='password'
              name='passwordConfirm'
              className={`form__group__input ${
                errors.passwordConfirm && 'form__group__input--error'
              }`}
              id='passwordConfirm'
              placeholder='Enter password again'
              value={formValues.passwordConfirm}
              onChange={(e) => handleChange(e)}
            />
            {errors.passwordConfirm && (
              <p className='form__group__feedback-error'>
                {errors.passwordConfirm}
              </p>
            )}
          </div>
          <button type='submit' className='form__submit'>
            Submit
          </button>
        </form>
        <div className='form__footer'>
          <p>Already have an account?</p>
          <Link className='form__footer__link' to='/'>
            SignIn
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
