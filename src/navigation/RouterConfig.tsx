import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../containers/Home/Home";
import Landing from "../containers/Landing/Landing";
import Shop from "../containers/Shop/Shop.js"
import { ROOT } from "./Constants";

export const RouterConfig = () => {
  return (
    <div>
      <Routes>
          <Route path={ROOT} element={<Home />}>
            <Route index element={<Landing />}/>    
            <Route path="/shop" element={<Shop/>}/>   
          </Route>
        {/* List all public routes here */}
        {/* <Route exact path={ROOT} component={Home} />
        <Route exact path={DASHBOARD} component={Dashboard} />
        <Route exact path={PAGE1} component={Page1} />
        <Route path="/login">
          <Login />
        </Route> */}

        {/* List all private/auth routes here */}
        {/* <PrivateRoute path={AUTH_PAGE1}>
          <AuthorizedPage1 />
        </PrivateRoute> */}
        {/* Do not hesitate to play around by moving some routes from public to private and vice-versa */}
        {/* <PrivateRoute path={DASHBOARD}>
          <Dashboard />
        </PrivateRoute> */}

        {/* List a generic 404-Not Found route here */}
        <Route path="*">
          {/* <NotFound /> */}
        </Route>
      </Routes>
    </div>
  );
};
