import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
// import './styles/styles.scss';
import './styles/app.global.scss';
import styles from './App.module.scss';

import SignIn from './pages/SingIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  return (
    <div className={styles.appContainer}>
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}
export default App;
