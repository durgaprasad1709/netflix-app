import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import * as ROUTES from './constants/routes';
import { IsUserRedirect, ProtectedRoute } from './helpers/routes';
import { useAuthListener } from './hooks';
import { Home, SignIn, SignUp, Browse } from './pages';

export default function App() {
  const { user } = useAuthListener();

  return (
    <>
      <Router>
        <Switch>
          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_IN}
            exact
          >
            <SignIn />
          </IsUserRedirect>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.SIGN_UP}
            exact
          >
            <SignUp />
          </IsUserRedirect>

          <IsUserRedirect
            user={user}
            loggedInPath={ROUTES.BROWSE}
            path={ROUTES.HOME}
            exact
          >
            <Home />
          </IsUserRedirect>

          <ProtectedRoute user={user} path={ROUTES.BROWSE} exact>
            <Browse />
          </ProtectedRoute>
        </Switch>
      </Router>
    </>
  );
}
