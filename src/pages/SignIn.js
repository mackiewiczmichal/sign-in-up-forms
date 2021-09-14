import { motion } from 'framer-motion';
import React, { useState, useRef, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import validateForm from '../utils/validateForm';

export default function SignIn() {
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});
  const firstUpdate = useRef(true);
  const history = useHistory();
  const [dataIsCorrect, setDataIsCorrect] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

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
        <h1 className='form__heading'>Sign in</h1>
        <form autoComplete='off' onSubmit={onFormSubmit}>
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
          <button type='submit' className='form__submit'>
            Submit
          </button>
        </form>
        <div className='form__footer'>
          <p>Don't have account yet?</p>
          <Link className='form__footer__link' to='/signup'>
            Sign up
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
