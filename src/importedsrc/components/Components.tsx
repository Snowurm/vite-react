import React, { useEffect } from "react";
import "./assets/styles/style.scss";

import About from "./Pages/About";
import Secret from "./Pages/Secret";
import Home from "./Pages/Home";
import Data from "./Pages/Data";
import Login from "./Pages/Login";
import Buy from "./Pages/Buy";
import Sell from "./Pages/Sell";
import MyStuff from "./Pages/MyStuff";
import Footer from "./objects/Footer";
import Header from "./objects/header/Header";
import SignUp from "./Pages/SignUp";
import AddItem from "./Pages/AddItem";
import DeleteItem from "./Pages/DeleteItem";
import ListItems from "./Pages/ListItems";
import ItemInfo from "./Pages/Iteminfo";
import {
    BrowserRouter as Router,
    // HashRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import { initializeItems } from "../reducers/ItemReducer";

const Components = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(initializeItems());
        // dispatch(loadUsers());
    }, [dispatch]);
    const layout = (
        <div className="d-flex flex-column vh-100">
            <div>
                <Header />
            </div>
            <div className="flex-fill">
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
    // const NoMatch = <div>404 - Page not found</div>;
    const current = (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={layout}>
                        <Route index element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="secret" element={<Secret />} />
                        <Route path="data" element={<Data />} />
                        <Route path="buy" element={<Buy />} />
                        <Route path="sell" element={<Sell />} />
                        <Route path="mystuff" element={<MyStuff />} />
                        <Route path="login" element={<Login />} />
                        <Route path="signup" element={<SignUp />} />
                        <Route path="additem" element={<AddItem />} />
                        <Route path="deleteitem" element={<DeleteItem />} />
                        <Route path="itemlist/*" element={<Outlet />}>
                            <Route index element={<ListItems />} />
                            <Route path=":itemId" element={<ItemInfo />} />
                        </Route>
                    </Route>
                </Routes>
            </Router>
        </>
    );

    return current;
};

export default Components;
