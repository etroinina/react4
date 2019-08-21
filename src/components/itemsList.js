import React from "react";

export const ItemsList = ({ item, children, addCategory }) => {

    return (
        <li>
            {item.title}
            {item.id}
            <div className="addButton" onClick={() => {addCategory(item.id)}}><span>+</span></div>
            {children && ( children.length > 0 ) && (
                <ul>
                    {children.map(category => (
                        <ItemsList item={ category }
                                   key={ category.id }
                                   children={ category.children }
                                   addCategory={ addCategory }/>
                    ))}
                </ul>
            )}
        </li>
    );
};