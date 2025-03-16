import { Link } from "react-router-dom";
import "./Register.css";

const Register = () => {
    return (
        <>
            <form>
                <div className="container">
                    <label htmlFor="username"><b>UserName</b></label>
                    <input type="text" placeholder="Create Username" name="username" required></input>

                    <label htmlFor="password"><b>Password</b></label>
                    <input type="password" placeholder="Create Password" name="password" required></input>

                    <button type="submit">Create Account</button>
                </div>
            </form>
        </>
    )
}

export default Register;