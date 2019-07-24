import React, { Component } from "react";
import Category from "./Category";
import '../styles/Sidebar.css';
import cloneDeep from 'lodash/cloneDeep';

export class Sidebar extends Component {
    state = {
        categories: [
            {
                id: 1,
                title: 'Shoes',
                subCategories: [
                    {
                        id: 4,
                        title: 'Sandals',
                        subCategories: [
                            {
                                id: 5,
                                title: 'Strapped',
                                subCategories: []
                            }
                        ]
                    },
                    {
                        id: 6,
                        title: 'Boots',
                        subCategories: [
                            {
                                id: 7,
                                title: 'High heels',
                                subCategories: []
                            }
                        ]
                    }
                ],
                tasks: []
            },
            {
                id: 2,
                title: 'Dresses',
                subCategories: []
            },
            {
                id: 3,
                title: 'Coats',
                subCategories: []
            }
        ]
    };

    recursAdding = (object, newCategoryObj) => {

        for(let i=0; i < object.length; i++) {

            if(object[i].id === newCategoryObj.id) {
                object[i].subCategories.push(newCategoryObj);
                return
            }


            if (object[i].subCategories.length > 0) {
                this.recursAdding(object[i].subCategories, newCategoryObj)
            }

            else {
                if(object[i].id === newCategoryObj.id) {
                    object[i].subCategories.push(newCategoryObj);
                }
            }
        }

        return object;
    };


    onAddSubcategory = (category) => {
        let allCategory = cloneDeep(this.state.categories);
        const currentCategoryId = category.id;
        const newCategoryTitle = prompt('Add Categorys title');
        const newCategory = {
           id: currentCategoryId,
           title: newCategoryTitle,
        };

        let updatedArray = this.recursAdding(allCategory, newCategory);

        this.setState({
            categories: updatedArray
        })
    };


    render() {
        return (
            <div className="Sidebar">
                <button className="addRootCategoryButton" onClick={this.onAddSubcategory}></button>

                <ul>
                    {this.state.categories.map(category => (
                        <Category item={category} key={category.id} children={category.subCategories} onAddSubcategory={this.onAddSubcategory}/>
                    ))}
                </ul>
            </div>
        );
    }
}
