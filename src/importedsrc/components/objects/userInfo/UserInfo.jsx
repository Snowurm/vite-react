import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../reducers/logInReducer";
import { deleteUser } from "../../../reducers/signUpReducer";

const UserInfo = () => {
    const dispatch = useDispatch();
    const loginData = useSelector((state) => state.login);
    const handleLogout = async (e) => {
        e.preventDefault();
        await dispatch(logout());
    };
    const handleDeleteUser = async (e) => {
        e.preventDefault();
        await dispatch(deleteUser(loginData));
        await dispatch(logout());
    };
    const user = loginData.data.user;
    const sessionToken = loginData.data.sessionToken;
    return (
        <div className="container">
            <h1 className="mt-5">User info </h1>
            <ul className="">
                <li>userName: {user.username}</li>
                <li>name: {user.name}</li>
                <li>FirstName: {user.firstName}</li>
                <li>LastName: {user.lastName}</li>
                <li>SessionToken: {sessionToken}</li>
                <li>userItems: {user.items}</li>
                <li>
                    items:
                    <ul>
                        {/* {user.items.map((item) => {
                            return (
                                <li key={item.id}>
                                    {item.type} {item.count} {item.price}
                                </li>
                            );
                        })} */}
                        <li>First</li>
                        <li>First</li>
                        <li>First</li>
                        <li>First</li>
                    </ul>
                </li>
            </ul>
            <div className="">
                <button
                    type="button"
                    className="btn btn-primary me-2"
                    onClick={handleLogout}
                >
                    Logout
                </button>
                <button
                    type="button"
                    className="btn btn-danger me-2"
                    onClick={handleDeleteUser}
                >
                    Delete user
                </button>
            </div>
        </div>
    );
};

export default UserInfo;
