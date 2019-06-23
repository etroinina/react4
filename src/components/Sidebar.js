import React, { Component } from "react";
import Category from "./Category";
import '../styles/Sidebar.css';

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

    onAddItems = () => {
        this.setState(state => {
            const categories = state.categories.concat(item => item + 1);

            return {
                categories,
            };
        });
    };


    render() {

        // return (
        //     <div className="Sidebar">
        //
        //             { this.state.categories.map(item =>
        //                 <ul>
        //                     <li key={ item.id }>
        //                         <div className="title">{ item.title }</div>
        //                         {/*<div className="addButton" onClick={this.onAddItems}><span>+</span></div>*/}
        //                     </li>
        //                 </ul>
        //             )}
        //     </div>
        // );

        return (
            <div className="Sidebar">
                <ul>
                    {this.state.categories.map(i => (
                        <Category item={i} key={i.id} />
                    ))}
                </ul>
            </div>
        );
    }
}
