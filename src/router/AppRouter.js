import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";

const history = createHistory();

const AppRouter = props => {
  return (
    <Router history={history}>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/category/:name" component={Category} exact={true} />
          <PublicRoute path="/login" component={Login} exact={true} />
          <Route path="/article/:id" component={Article} exact={true} />
          <PrivateRoute
            path="/admin-dashboard"
            component={Admin}
            exact={true}
          />
          <PrivateRoute path="/edit/:id" component={EditPost} exact={true} />
          <PrivateRoute path="/profile/:id" component={Profile} exact={true} />
          <Route component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
