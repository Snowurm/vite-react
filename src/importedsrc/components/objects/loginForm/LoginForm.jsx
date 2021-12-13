import React from "react";
import logo from "../../assets/img/bootstrap-logo.svg";
import "./LoginForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../../reducers/logInReducer";

const LoginForm = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const loginInfo = { username, password };
        await dispatch(login(loginInfo));
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };
    return (
        <>
            <div className="loginForm">
                <div className="body text-center">
                    <main className="form-signin">
                        <form onSubmit={handleSubmit}>
                            <img
                                className="mb-4"
                                src={logo}
                                alt=""
                                width="72"
                                height="57"
                            />
                            <h1 className="h3 mb-3 fw-normal">
                                Please sign in
                            </h1>

                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="floatingInput"
                                    placeholder="admin"
                                    onChange={handleUsernameChange}
                                />
                                <label htmlFor="floatingInput">Username</label>
                            </div>
                            <div className="form-floating">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="floatingPassword"
                                    placeholder="Password"
                                    onChange={handlePasswordChange}
                                />
                                <label htmlFor="floatingPassword">
                                    Password
                                </label>
                            </div>

                            <div className="checkbox mb-3">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="remember-me"
                                    />{" "}
                                    Remember me
                                </label>
                            </div>
                            <button
                                className="w-100 btn btn-lg btn-primary"
                                type="submit"
                            >
                                Sign in
                            </button>
                            <p className="mt-5 mb-3 text-muted">
                                &copy; 2017–2021
                            </p>
                        </form>
                    </main>
                </div>
            </div>
        </>
    );
};
export default LoginForm;
