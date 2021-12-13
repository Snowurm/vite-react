import React from "react";
const items = [
    { id: 0, name: "apple", amount: "84", price: "2" },
    { id: 1, name: "orange", amount: "73", price: "3" },
    { id: 2, name: "banana", amount: "79", price: "6" },
    { id: 3, name: "mango", amount: "84", price: "12" },
    { id: 4, name: "cucumber", amount: "73", price: "3" },
    { id: 5, name: "tomato", amount: "79", price: "4" },
];

const ItemGrid = () => {
    const result = (
        <>
            <table
                id="example"
                className="table table-striped"
                style={{ width: "100%" }}
            >
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((i) => {
                        return (
                            <tr key={i.id}>
                                <td>{i.id}</td>
                                <td>{i.name}</td>
                                <td>{i.amount}</td>
                                <td>{i.price}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Price</th>
                    </tr>
                </tfoot>
            </table>
        </>
    );
    return result;
};

export default ItemGrid;
