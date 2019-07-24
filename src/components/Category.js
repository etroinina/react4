import React from "react";

function Category({ item, children, onAddSubcategory }) {
    return (
        <li>
            {item.title}
            <div className="addButton" onClick={() => {onAddSubcategory(item)}}><span>+</span></div>
            {children && ( children.length > 0 ) && (
                <ul>
                    {children.map(category => (
                        <Category item={category} key={category.id} children={category.subCategories} onAddSubcategory={onAddSubcategory}/>
                    ))}
                </ul>
            )}
        </li>
    );
}

export default Category;