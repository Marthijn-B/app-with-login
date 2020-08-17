import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthenticatedRoute = ({ component, path })  => {
  const Component = component;

  // Need to create logic to check if user is logged in for the line below
  // For now, just change the value below to test routing/redirection
  const isAuthenticated = false;

  return (
    <Route>
      { isAuthenticated
        ? <Component />
        : <Redirect to={`/login`} />
      }
    </Route>
  );
}

export default AuthenticatedRoute;
