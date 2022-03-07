import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import  Home  from "pages/Home/Home";
import Favorites from "pages/Favorites/Favorites";
import { ThemeProvider } from "theme";
import NavBar from "components/NavBar/NavBar";

const AppRouter = () => {
  return (
    <ThemeProvider>
      <Router>
        <Route path="/home" render={(history) => (
          <NavBar history={history} />
        )}/>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route path="/favorites" component={Favorites} />
          <Redirect from="/" to="/home" />
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export default AppRouter;