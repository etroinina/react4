import React from "react";

function Category({ item }) {
    let children = null;

    if (item.subCategories && item.subCategories.length) {
        children = (
            <ul>
                {item.subCategories.map(i => (
                    <Category item={i} key={i.id} />
                ))}
            </ul>
        );
    }

    return (
        <li>
            {item.title}
            {children}
        </li>
    );
}

export default Category;