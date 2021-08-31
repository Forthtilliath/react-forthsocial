import './App.scss';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { COOKIE_NAME } from './_constants/app.const';
import UidContext from './components/AppContext/index.context';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as api from './_api';
import Cookies from 'universal-cookie';

function App() {
    // let user: string = '';
    // if (localStorage.getItem(COOKIE_NAME) !== null) {
    //     user = JSON.parse(localStorage.getItem(COOKIE_NAME) as string);
    // }
    // console.log('User :', user, '!');
    const cookies = new Cookies();

    const [uid, setUid] = useState('');
    const dispatch = useDispatch();

    // NOTE KEEP IT !
    const fetchToken = () => {
        api.getJwt()
            // .then((res) => setUid(res.data))
            .then(({data}) => console.log('res', data))
            .catch((_err) => console.log('Client - No token'));
    };

    useEffect(() => {
        fetchToken();

        if (uid) {
            console.log('uid', uid);
            dispatch(api.getUser(uid));
        }
    }, [uid, dispatch]);

    useEffect(() => {
        console.log(cookies);
        fetchToken();
    }, []);

    return (
        <UidContext.Provider value={uid}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/profile/" component={Profile}></Route>
                    <Route exact path="/profile/:username" component={Profile}></Route>
                    <Route exact path="/register" component={Register}></Route>
                    <Route exact path="/login" component={Login}></Route>
                </Switch>
            </BrowserRouter>
        </UidContext.Provider>
    );
}

export default App;
