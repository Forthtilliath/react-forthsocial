import './Register.scss';

const Register = () => {
    return (
        <div className="loginContainer">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Forthsocial</h3>
                    <span className="loginDesc">Connect with friends and the world around you on Forthsocial.</span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder="Username" type="text" name="username" id="username" />
                        <input className="loginInput" placeholder="Email" type="email" name="email" id="email" />
                        <input
                            className="loginInput"
                            placeholder="Password"
                            type="password"
                            name="password"
                            id="password"
                        />
                        <input
                            className="loginInput"
                            placeholder="Password Again"
                            type="password"
                            name="password"
                            id="password"
                        />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton">Log into Account</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
