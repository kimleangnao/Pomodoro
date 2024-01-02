import { Link } from "react-router-dom";


const Login = () => {
    return(
        <form className="login">
            <div className="login-title">
                LOGIN
            </div>
            <div className="login-wrapper">
                <label htmlFor="email" className="login-wrapper-text">
                    Account Name
                </label> <br />
                <input type="email" id="email" name="email" placeholder="example@gmail.com" className="login-wrapper-input" />

                
            </div>
            <div className="login-wrapper">
                <label htmlFor="password" className="login-wrapper-text">
                    Password
                </label> <br />
                <input type="password" id="password" name="password" placeholder="*******" autoComplete="new-password" className="login-wrapper-input" />
            </div>

            <input type="submit" className="login-button" value="Login" />
            <div className="login-or"> OR</div>
            <div className="login-link">
                Create an <Link to="/createaccount">account</Link>
            </div>
        </form>
    )
}

export default Login;