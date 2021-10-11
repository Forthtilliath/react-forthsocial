import Login from '../components/Login/Login';
import Register from '../components/Register/Register';
import Home from '../pages/Home/Home';
import Profile from '../pages/Profile/Profile';
import { BrowserRouter, Redirect, Route, Switch, RouteComponentProps } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../components/AppContext/Auth.context';
import Friends from '../pages/Friends/Friends';
import Topbar from './Topbar/Topbar';
import Chat from '../pages/Chat/Chat';
import Notifications from '../pages/Notifications/Notifications';
import Settings from '../pages/Settings/Settings';
import Remember from '../pages/Remember/Remember';

interface MatchParams {
    username: string;
}

interface MatchProps extends RouteComponentProps<MatchParams> {}

const Router = () => {
    const {
        connexion: { loggedIn, user },
    } = useContext(AuthContext);

    return (
        <BrowserRouter>
            <Switch>
                {loggedIn === true && (
                    <>
                        <Topbar />
                        <Switch>
                            {/* Main menu links */}
                            <Route exact path="/home" component={Home}></Route>
                            <Route exact path="/friends/" component={Friends}></Route>

                            {/* Second menu links */}
                            {/* <Route exact path="/profile/" component={Profile}></Route> */}
                            <Route
                                exact
                                path="/profile"
                                render={() => (
                                    <Profile key={user?.username} username={user?.username} />
                                )}
                            />
                            <Route
                                exact
                                path="/profile/:username"
                                render={({ match }: MatchProps) => (
                                    <Profile key={match.params.username} username={match.params.username} />
                                )}
                            />

                            <Route exact path="/chat" component={Chat}></Route>
                            <Route exact path="/notifications" component={Notifications}></Route>
                            <Route exact path="/settings" component={Settings}></Route>

                            {/* Sidebar links */}
                            <Route exact path="/remember" component={Remember}></Route>

                            <Redirect to="/home" />
                        </Switch>
                    </>
                )}
                {loggedIn === false && (
                    <Switch>
                        <Route exact path="/register" component={Register}></Route>
                        <Route exact path="/login" component={Login}></Route>
                        <Redirect to="/login" />
                    </Switch>
                )}
            </Switch>
        </BrowserRouter>
    );
};

export default Router;
