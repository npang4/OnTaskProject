import React, { useState } from "react";
import PasswordCheckList from "react-password-checklist"
import { useDispatch } from "react-redux";
import { validateRegister } from "../../redux/actions/registerActions";
import './Register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log("Name: " + name);
        console.log("email: " + email);
        console.log("Password: " + password);
        console.log("Confirmed password: " + confirmPassword);

        dispatch(validateRegister(name, email, password));
    }


    return (
        <div>
            <div className="form">
                <h1>Registration </h1>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label className="label">Name</label>
                <input className="register-input" value={name} type="text" onChange={(e) => setName(e.target.value)} />

                <label className="label">Email</label>
                <input className="register-input" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />

                <label className="label">Password</label>
                <input className="register-input" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />

                <label className="label">Confirm Password</label>
                <input className="register-input" value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} />

              {/* Password validation: checks if password is min length and matches */}
                <PasswordCheckList 
                    rules={["minLength", "match"]}
                    minLength={8}
                    value={password}
                    valueAgain={confirmPassword}
                    messages={{
                        minLength: "Password meets minimum length",
                        match: "Passwords match"
                    }}
                />

                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Register;
