import React, { Component } from "react";
import { Category } from "./Category";
import '../styles/Sidebar.css';

export class Sidebar extends Component {
    state = {
        categories: [
            {
                id: 1,
                title: 'Shoes',
                subCat: [
                    {
                        id: 4,
                        title: 'Sandals',
                        subCat: [
                            {
                                id: 5,
                                title: 'Strapped',
                                subCat: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 2,
                title: 'Dresses',
                subCat: []
            },
            {
                id: 3,
                title: 'Coats',
                subCat: []
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
                {this.state.categories.map((item, i ) =>
                    <li key={ item.id }>
                        <div className="title">{ item.title }</div>
                        {
                            item.subCat
                                ? (
                                    <ul key={i}>
                                        {item.subCat.map(function (subCat, i) {
                                            return <li key={i}>{subCat.title}</li>
                                        })}
                                    </ul>
                                )
                                : null
                        }

                        {/*<div className="title">{ item.title }</div>*/}
                        {/*if (item.subCat !== undefined) {*/}
                            {/*return (*/}
                            {/*<ul key={i}>{item.title}*/}

                            {/*{item.subCat.map(function (subCat, i) {*/}
                                {/*return <li key={i}>{subCat.title}</li>;*/}
                            {/*})}*/}
                            {/*</ul>*/}
                            {/*)*/}
                        {/*} else {*/}
                            {/*return (*/}
                            {/*<li key={i}>{item.title}</li>*/}
                            {/*)*/}
                        {/*}*/}
                    </li>
                )};
                </ul>
            </div>
        );
    }
}
