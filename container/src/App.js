import React, { lazy, Suspense, useState, useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import { createBrowserHistory } from "history";

import Progress from "./components/Progress";
import Header from "./components/Header";
import Goodlooking from "./components/GoodlookingApp";
import SomeSite from './components/SomeSiteApp';
const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);


  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
        <Suspense>
            <Switch>
              <Route exact path="/" component={SomeSite} />
              <Route path="/someSite" component={SomeSite}/>
              <Route
                path="/goodlookingSite" component={Goodlooking}/>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};
