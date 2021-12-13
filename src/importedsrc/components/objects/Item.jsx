import React from "react";

const Item = (props) => {
    const item = props.item;
    const result = (
        <div>
            {item.id} {item.name} {item.amount} {item.price}
        </div>
    );
    return result;
};
const ItemSmall = (props) => {
    const item = props.item;
    const result = (
        <>
            {item.amount} {item.name}
            <button>trade</button>
        </>
    );
    return result;
};

//

export { ItemSmall, Item };
