import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './SuccessfulSign.module.scss';

export default function SuccesfulSign() {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 2000);
  });
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span className={styles.succesSign}>Form submitted succesfully!</span>
    </motion.div>
  );
}
