import React from 'react';
import { Route } from "react-router-dom";


export const RouteWithProps = ({ path, component: Component }) => (
  <Route exact path={path} render={(props) => (
    <Component />
  )}/>
)