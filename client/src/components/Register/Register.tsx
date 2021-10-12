import { useContext, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Logo from '../../images/logo/logo.png';
import { signon } from '../../_actions/users.actions';
import AuthContext from '../AppContext/Auth.context';

const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { getConnexion } = useContext(AuthContext);
    const [formData, setFormData] = useState({
        username: 'Forth',
        email: 'forth@live.fr',
        password: 'test33',
        passwordConfirm: 'test33',
    });
    // const [formData, setFormData] = useState({ username: '', email:'',password: '', passwordConfirm: '' });

    const handleChange = (e: { target: { name: string; value: string } }) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const register = async () => {
        dispatch(signon(formData, getConnexion, history));
    };

    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <img src={Logo} alt="logo" style={{ width: 200 }} />
                    <h3 className="registerLogo">Forthsocial</h3>
                    <span className="registerDesc">
                        Connectez-vous avec vos amis et le monde qui vous entoure sur Forthsocial.
                    </span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input
                            className="registerInput"
                            placeholder="Username"
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                        />
                        <input
                            className="registerInput"
                            placeholder="Email"
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                        <input
                            className="registerInput"
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="password"
                            value={formData.password}
                            onChange={handleChange}
                        />
                        <input
                            className="registerInput"
                            placeholder="Password Again"
                            type="password"
                            name="passwordConfirm"
                            id="passwordConfirm"
                            value={formData.passwordConfirm}
                            onChange={handleChange}
                        />
                        <button className="registerButton" onClick={register}>
                            Sign Up
                        </button>

                        <Link to="login" className="registerLoginLink">
                            <button className="registerLoginButton">Log into Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
