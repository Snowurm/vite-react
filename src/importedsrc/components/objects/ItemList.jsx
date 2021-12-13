import React from "react";
import { Link } from "react-router-dom";
import { ItemSmall } from "./Item";
const items = [
    { id: 0, name: "apples", amount: "84", price: "168" },
    { id: 1, name: "oranges", amount: "73", price: "219" },
    { id: 2, name: "bananas", amount: "79", price: "474" },
];

const ItemList = () => {
    const result = (
        <div className="list-group">
            {items.map((item) => {
                return (
                    <Link
                        to="#"
                        className="list-group-item list-group-item-action"
                        key={item.id}
                    >
                        <ItemSmall
                            key={item.id}
                            item={item}
                            id={item.id}
                        ></ItemSmall>
                    </Link>
                );
            })}
        </div>
    );
    return result;
};

export default ItemList;
