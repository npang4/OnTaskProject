import React, { useState, useEffect } from "react";
import PasswordCheckList from "react-password-checklist"
import { useDispatch } from "react-redux";
import { validateRegister } from "../../redux/actions/registerActions";
import { useNavigate } from "react-router-dom";
import SimpleReactValidator from 'simple-react-validator';
import './Register.css';


const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [nameError, setNameError] = useState({});
    const [emailError, setEmailError] = useState({});
    const [passwordError, setPasswordError] = useState({});

    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Form validation for name, email, and password
    const formValidation = () => {
        const nameError = {};
        const emailError = {};
        const passwordError = {};
        let isValid = true;

        if (name.trim().length < 5) {
            nameError.nameShort = "Name too short";
            isValid = false;
        }

        if (password.trim().length < 8) {
            password.passShort = "Password too short";
            isValid = false;
        }

        setNameError(nameError);
        setEmailError(emailError);
        setPasswordError(passwordError);

        return isValid;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const isValid = formValidation();

        if (isValid) {
            dispatch(validateRegister(name, email, password));
            navigate("/login");
        }

     
    }

    return (
        <div className="register-container">
            <form className="registration-form" onSubmit={handleSubmit}>

                <h1 className="sign-up">Sign-up </h1>

                <label className="register-label">Name</label>
                <input className="register-input" name="name" value={name} type="text" onChange={(e) => setName(e.target.value)} />


                <label className="register-label">Email</label>
                <input className="register-input" name="email" value={email} type="email" onChange={(e) => setEmail(e.target.value)} />

                <label className="register-label">Password</label>
                <input className="register-input" name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />

                <label className="register-label">Confirm Password</label>
                <input className="register-input" name="confirmPassword" value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} />

                {/* Password validation: checks if password is min length and matches */}
                <PasswordCheckList
                    // Minimum length and match to check if password and confirm password matches
                    rules={["minLength", "match"]}
                    minLength={8}
                    value={password}
                    valueAgain={confirmPassword}
                    messages={{
                        minLength: "Password meets minimum length",
                        match: "Passwords match"
                    }}
                />
                <button className="submit-btn" type="submit"> Submit </button>
            </form>
        </div>
    )
}

export default Register;
