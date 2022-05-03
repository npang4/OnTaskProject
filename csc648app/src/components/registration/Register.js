import React, { useState } from "react";
import PasswordCheckList from "react-password-checklist"
import { useDispatch } from "react-redux";
import { validateRegister } from "../../redux/actions/registerActions";
import { useNavigate } from "react-router-dom";
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
            //nameError.nameShort = "Name too short";
            isValid = false;
        }

        if (password.trim().length < 8) {
            // password.passShort = "Password too short";
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
            <form className="registration-form" aria-label="form" onSubmit={handleSubmit}>

                <h1 className="sign-up">Sign-up </h1>

                <div className="data-field">
                    <label className="register-label" for="name">Name</label>
                    <input className="register-input" id="name" name="name" value={name} type="text" onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="data-field">
                    <label className="register-label" for="email">Email</label>
                    <input className="register-input" id="email" name="email" value={email} type="text" onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="data-field">
                    <label className="register-label" for="password">Password</label>
                    <input className="register-input" id="passwordField" name="password" value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="data-field">
                    <label className="register-label" for="confirmPassword">Confirm Password</label>
                    <input className="register-input" id="confirmPassword" name="confirmPassword" value={confirmPassword} type="password" onChange={(e) => setConfirmPassword(e.target.value)} />
                </div>

                <div className="data-field">
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
                </div>

                <div className="data-field">
                    <label> <input type="checkbox" required></input>  <span>I accept Terms and Privacy rules.</span></label>
                </div>
                {/* Password validation: checks if password is min length and matches */}

                <button className="submit-btn" type="submit"> Sign-up </button>
            </form>
        </div>
    )
}

export default Register;
