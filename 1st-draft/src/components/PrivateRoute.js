import React from 'react';
import { Route, Redirect } from 'react-router-dom';
//4th Step
/*
  Private Route rules:
  1. It has the same API as <Route />.
  2. It renders a <Route /> and passes all the props through to it.
  3. It checks if the user is authenticated, if they are, it renders the “component” prop. If not, it redirects the user to /login.
*/
//If we try to route to a route with the PrivateRoute component on it and we do 
//not have a token then it redirects you to login


//component is lowercase and we need it to be capitailized 
//props destructered pulling out component renamed it and passed in the rest(...rest)
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = props.component
  return (
    <Route
      {...rest}
      //render is used to run a fuction to see if the token is in locaStorage 
      render={() => {
        if (localStorage.getItem('token')) {
          // if token is in localstorage, render the given component
          return <Component />;
        } else {
          //redirect routes you back to login
          return <Redirect to="/login" />;
        }
      }}
    />
  );
};

export default PrivateRoute;