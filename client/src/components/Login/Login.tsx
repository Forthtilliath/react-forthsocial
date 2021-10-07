import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { signin } from '../../_actions/users.actions';
import AuthContext from '../AppContext/Auth.context';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { getConnexion } = useContext(AuthContext);
    const [formData, setFormData] = useState({ username: 'Jean', password: 'test33' });
    // const [formData, setFormData] = useState({ username: '', password: '' });

    const handleChange = (e: { target: { name: string; value: string } }) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const login = () => {
        dispatch(signin(formData, getConnexion, history));
    };

    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Forthsocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Forthsocial.</span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={(e) => {e.preventDefault()}}>
                        <input
                            className="loginInput"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username"
                            type="username"
                            name="username"
                            id="username"
                            autoComplete="false"
                        />
                        <input
                            className="loginInput"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="password"
                            autoComplete="false"
                        />
                        <button className="loginButton" onClick={login}>
                            Log In
                        </button>
                        <span className="loginForgot">Forgot Password?</span>

                        <Link to="register" className="loginRegisterLink">
                            <button className="loginRegisterButton">Create a New Account</button>
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
