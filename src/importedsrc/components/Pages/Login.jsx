import React from "react";
import { useSelector } from "react-redux";
import LoginForm from "../objects/loginForm/LoginForm";
import UserInfo from "../objects/userInfo/UserInfo";

const Login = () => {
    const loginState = useSelector((state) => state.login);
    const user = loginState?.data?.user;
    const sessionToken = loginState?.data?.sessionToken;
    const loggedIn = user && sessionToken ? true : false;

    return <>{loggedIn ? <UserInfo /> : <LoginForm />}</>;
};
export default Login;
