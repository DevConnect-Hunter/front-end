import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
    return (
        <>
            <form>
                <div className="container">
                    <label htmlFor="username"><b>UserName</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required></input>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required></input>

                    <button type="submit">Login</button>
                </div>

                <div className="container">
                    <button type="button" className="cancelbutton">Cancel</button>
                    <span className="password">Forgot Password</span>
                </div>
            </form>
        </>
    )
}

export default Login;