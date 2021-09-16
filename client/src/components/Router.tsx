// import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
// import Topbar from "./components/Topbar/Topbar";
// import Logout from "./pages/Logout";
// import AuthContext from "./components/AppContext/Auth.context";
// import { useContext } from "react";
// import Profile from "./pages/Profile";

import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from "../components/AppContext/Auth.context";


const Router = () => {
  const { connexion: {loggedIn} } = useContext(AuthContext);

  return (
    <BrowserRouter>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        {loggedIn === true && (
          <Switch>
          <Route exact path="/profile/" component={Profile}></Route>
            <Route exact path="/profile/:username" component={Profile}></Route>
        </Switch>
        )}
        {loggedIn === false && (
          <Switch>
            <Route exact path="/register" component={Register}></Route>
            <Route exact path="/login" component={Login}></Route>
        </Switch>
        )}
        </Switch>
    </BrowserRouter>
  );
};

export default Router;
