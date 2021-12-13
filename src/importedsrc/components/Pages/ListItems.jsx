import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ListItems = () => {
    const itemList = useSelector((state) => {
        return state?.items?.data;
    });
    const table = (
        <>
            {console.log(itemList)}
            <table
                id="example"
                className="table table-striped"
                style={{ width: "100%" }}
            >
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>ID</th>
                        <th>Owner</th>
                    </tr>
                </thead>
                <tbody>
                    {itemList?.map((i) => {
                        return (
                            <tr key={i.id}>
                                <td>{i.type}</td>
                                <td>{i.count}</td>
                                <td>{i.price}</td>
                                <td>{i.id}</td>
                                <td>{i.owner}</td>
                                <td>
                                    <Link to={i.id}>
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                        >
                                            View
                                        </button>
                                    </Link>
                                    {/* <Link to="/login">
                                        <button
                                            type="button"
                                            className="btn btn-outline-warning me-2"
                                            onMouseDown={handleClick}
                                        >
                                            {firstName + " " + lastName}
                                        </button>
                                    </Link> */}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Type</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>ID</th>
                        <th>Owner</th>
                    </tr>
                </tfoot>
            </table>
        </>
    );
    return table;
};

export default ListItems;
