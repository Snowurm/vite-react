import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { signUp } from "../../../reducers/signUpReducer";

import "./signUpForm.css";

const SignUpForm = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEMail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const signUpInfo = { username, password, firstName, lastName, email };
        await dispatch(signUp(signUpInfo));
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    };
    const handleEMailChange = (event) => {
        setEMail(event.target.value);
    };
    return (
        <>
            <div className="body-background">
                <div className="container-fluid d-flex justify-content-center align-items-center h-100">
                    <form
                        className="card p-3 text-center py-4"
                        onSubmit={handleSubmit}
                    >
                        <h4>Create account</h4>
                        <div>
                            {" "}
                            <span>Already have an account?</span>{" "}
                            <a href="#" className="text-decoration-none">
                                Signin
                            </a>{" "}
                        </div>
                        <div className="input-group px-3 mt-3">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Username"
                                aria-label="Username"
                                onChange={handleUsernameChange}
                            />
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                aria-label="Password"
                                onChange={handlePasswordChange}
                            />
                        </div>

                        <div className="input-group px-3 mt-3">
                            {" "}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="First Name"
                                aria-label="First Name"
                                onChange={handleFirstNameChange}
                            />{" "}
                            <span></span>{" "}
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Last Name"
                                aria-label="Last Name"
                                onChange={handleLastNameChange}
                            />{" "}
                        </div>
                        <div className="mt-3 px-3">
                            {" "}
                            <input
                                className="form-control"
                                placeholder="E-mail"
                                aria-label="E mail"
                                onChange={handleEMailChange}
                            />{" "}
                        </div>
                        <div className="mt-3 d-grid px-3">
                            {" "}
                            <button
                                className="btn btn-primary btn-block btn-signup text-uppercase"
                                type="submit"
                            >
                                {" "}
                                <span>Signup</span>{" "}
                            </button>{" "}
                            <p className="mt-5 mb-3 text-muted">
                                &copy; since 2021
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
export default SignUpForm;
