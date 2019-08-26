import React from 'react';
import Login from "components/Private/Login";
import Logout from "components/Private/Logout";
import Dashboard from "components/Private/pages/Dashboard";
import { handleLogin, isLoggedIn } from "services/auth/auth";
import { PrivateRoute } from "components";
import { Router } from "@reach/router";

export default () => (
  <>
    {isLoggedIn() ? ( <Logout/> ) : ( <Login private="/private/dashboard" handleLogin={handleLogin} /> )}

    <Router>
      <PrivateRoute
        path="/private/dashboard"
        render={Dashboard}
        redirect={"/login"}
      />
    </Router>
  </>
);