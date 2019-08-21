import React from "react";
import { ItemsList } from "./itemsList";
import '../styles/Sidebar.css';
import { AddItem } from './addItem';

export const Sidebar = (props) => {
    const { categories, addCategory } = props;

    return (
        <div className="Sidebar">
            {/*<button className="addRootCategoryButton" onClick={ this.onAddChild }>Add Category</button>*/}

            <br/>
            <AddItem onAdd={ addCategory }/>
            <br/>

            <ul>
                {categories.map(category => (
                    <ItemsList item={ category }
                               key={ category.id }
                               children={ category.children }
                               addCategory={ addCategory }
                    />
                ))}
            </ul>
        </div>
    );
};
