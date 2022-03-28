import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { validateLogin } from "../../redux/actions/loginActions";
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();


        console.log("DISPATCH: " + username)
        console.log("DISPATCH: " + password)

        dispatch(validateLogin(username, password));
        setUsername("");
        setPassword("");
    }
    return (
        <div className="container">
            <h1> Login</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label> Username</label>
                <input type="text" name="id" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="login-btn" type="submit">
                    Login
                </button>
            </form>


        </div>
    )
}

export default Login;