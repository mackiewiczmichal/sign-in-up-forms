import React from 'react'
import { Route, Switch, useLocation } from "react-router-dom";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import logo from '../images/logo.png'
import { AnimatePresence } from 'framer-motion';
import SuccesfulSign from './../components/SuccesfulSign';
export default function Form() {

  const location = useLocation();
    return (
        <div className="form-wrapper">
            <img className="form-wrapper__image"src={logo} alt="Our app "/>
            <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path="/">
          <SignIn/>
          </Route>
          <Route path="/signup">
           <SignUp/>
          </Route>
          <Route path="/success">
            <SuccesfulSign />
          </Route>
        </Switch>
        </AnimatePresence>
        </div>
    )
}
