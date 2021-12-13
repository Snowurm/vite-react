import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { logout } from "../../reducers/logInReducer";
import { deleteUser } from "../../reducers/signUpReducer";

const itemInArray = (arr, id) => {
    return arr ? (arr[id] ? arr[id] : false) : false;
};

const ItemInfo = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const itemsData = useSelector((state) => state.items);
    const handleLogout = async (e) => {
        e.preventDefault();
        console.log("handleLogout: beep");
        console.log("handleLogout: boop");
        // await dispatch(logout());
    };
    const handleDeleteUser = async (e) => {
        e.preventDefault();
        console.log("handleDeleteUser: beep");
        console.log("handleDeleteUser: boop");
        // await dispatch(deleteUser(loginData));
        // await dispatch(logout());
    };
    const items = itemsData.data;
    // let myArrayWithNoDuplicates = myArray.reduce(function (previousValue, currentValue) {
    //     if (previousValue.indexOf(currentValue) === -1) {
    //       previousValue.push(currentValue)
    //     }
    //     return previousValue
    //   }, [])

    // {"type":"Omena","count":12,"price":12,"id":"61812c625e79ac2da21a7dd4"}{"type":"Banaani","count":12233,"price":12,"id":"61812c685e79ac2da21a7dda"}{"type":"Omena","count":12,"price":12,"id":"61812c685e79ac2da21a7de0"}{"type":"Omena","count":12,"price":12,"id":"61812cb218bd10de6dc6c53c"}{"type":"Omena","count":12,"price":12,"id":"6182700bccd5eb6a68769432"}{"type":"Omena","count":12,"price":12,"id":"61827a50cd8166a1115cff60"}{"type":"Omena","count":12,"price":12,"id":"61827a85bd21477247f54d09"}{"type":"Omena","count":12,"price":12,"id":"6184e67f80c8364f126fd3b7"}{"type":"Omena","count":12,"price":12,"id":"6184e67f80c8364f126fd3b9"}{"type":"Omena","count":12,"price":12,"id":"6184e67f80c8364f126fd3bd"}{"type":"Omena","count":12,"price":12,"id":"6184e67f80c8364f126fd3c0"}{"type":"Omena","count":12,"price":12,"id":"6184e68080c8364f126fd3c3"}{"type":"Omena","count":12,"price":12,"id":"61a8cd756b2bb8d11eb00cbf"}{"type":"Omena","count":12,"price":12,"id":"61a8db343d1ed9e2f5938b84"}
    const item = items?.reduce((previous, current) => {
        const id = params.itemId;
        if (current.id === id) {
            return previous.concat(current);
        } else {
            return previous;
        }
    }, [])[0];
    const demo = (
        <div className="container">
            <h1 className="mt-5">Item info </h1>
            <ul className="">
                <li>Type: {item?.type}</li>
                <li>Count: {item?.count}</li>
                <li>Price: {item?.price}</li>
                <li>Id: {item?.id}</li>
                <li>Owner: {item?.owner}</li>
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
    return demo;
};

export default ItemInfo;
