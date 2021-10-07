import { Link } from 'react-router-dom';

const Register = () => {

    const register = async() => {
        
    };

    return (
        <div className="registerContainer">
            <div className="registerWrapper">
                <div className="registerLeft">
                    <h3 className="registerLogo">Forthsocial</h3>
                    <span className="registerDesc">Connect with friends and the world around you on Forthsocial.</span>
                </div>
                <div className="registerRight">
                    <div className="registerBox">
                        <input
                            className="registerInput"
                            placeholder="Username"
                            type="text"
                            name="username"
                            id="username"
                        />
                        <input className="registerInput" placeholder="Email" type="email" name="email" id="email" />
                        <input
                            className="registerInput"
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="password"
                        />
                        <input
                            className="registerInput"
                            placeholder="Password Again"
                            type="password"
                            name="password"
                            id="password"
                        />
                        <button className="registerButton" onClick={register}>Sign Up</button>

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
