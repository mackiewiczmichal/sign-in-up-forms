import React, { useState } from 'react';
import logo from '../../images/logo.png';
import { motion } from 'framer-motion';
import SuccesfulSign from '../SuccessfulSign/SuccessfulSign';
import useForm from '../../utils/hooks/useForm/useForm';
import styles from './Form.module.scss';
import { Link } from 'react-router-dom';

export default function Form({ formConfig, heading, formFooter }) {
  const { renderFormInputs, isFormValid } = useForm(formConfig);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit = (e) => {
    setIsSubmitted(true);
    console.log(isSubmitted);
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className={styles.formWrapper}>
        <h1 className="form__heading">{heading}</h1>
        <img className={styles.formImage} src={logo} alt="Our app " />
        {!isSubmitted ? (
          <>
            <form onSubmit={onSubmit}>
              {renderFormInputs()}
              <button
                className={styles.formSubmit}
                type="submit"
                disabled={!isFormValid()}
              >
                Submit
              </button>
            </form>
            <div className={styles.formFooter}>
              <p>{formFooter.text}</p>
              <Link className={styles.formFooterLink} to={formFooter.link}>
                {formFooter.linkText}
              </Link>
            </div>
          </>
        ) : (
          <SuccesfulSign />
        )}
      </div>
    </motion.div>
  );
}
