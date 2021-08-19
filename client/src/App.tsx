import './App.scss';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path="/profile/:username" component={Profile}></Route>
                <Route exact path="/register" component={Register}></Route>
                <Route exact path="/login" component={Login}></Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
