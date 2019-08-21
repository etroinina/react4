import React, { Component } from "react";
import '../styles/App.css';
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import cloneDeep from 'lodash.clonedeep';

export class App extends Component {
    state = {
        categories: [
            {
                id: 1,
                title: 'Shoes',
                parentId: null,
                children: [
                    {
                        id: 2,
                        title: 'Sandals',
                        parentId: 1,
                        children: [
                            {
                                id: 3,
                                title: 'Strapped',
                                parentId: 2,
                                children: []
                            }
                        ]
                    },
                    {
                        id: 4,
                        title: 'Boots',
                        parentId: 1,
                        children: [
                            {
                                id: 5,
                                title: 'High heels',
                                parentId: 4,
                                children: []
                            }
                        ]
                    }
                ]
            },
            {
                id: 6,
                title: 'Dresses',
                parentId: null,
                children: []
            },
            {
                id: 7,
                title: 'Coats',
                parentId: null,
                children: []
            }
        ],

        isSidebarVisible: true
    };


    toggleSidebar = () => {
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible
        });
    };


    recursAdding = (object, newObj) => {
        for(let i=0; i < object.length; i++) {

            if(object[i].id === newObj.parentId) {
                object[i].children.push(newObj);
            }

            if (object[i].children.length > 0) {
                this.recursAdding(object[i].children, newObj)
            }

        }

        return object;
    };

    addCategory = (parentId = 1) => {
        // let count = null;

        var name = this.getName();

        let updatedCategories = cloneDeep(this.state.categories);
        // console.log(updatedCategories);

        for(let i=0; i < updatedCategories.length; i++){

            // console.log(updatedCategories[i]);
            // if (updatedCategories[i].id - updatedCategories[i - 1].id) {
            //     count = count + updatedCategories[i].id;
            // }
        }

        // this.setState(state => {
        //
        //     updatedCategories.push({
        //         // id: state.categories[state.categories.length - 1].id + 1,
        //         id: count + 1,
        //         title: title,
        //         parentId: null,
        //         children: []
        //     });
        //     return {
        //         ...state,
        //         categories: updatedCategories
        //     }
        //
        //     // console.log(count);
        // });



        const newItem = {
            id: 23,
            title: name,
            parentId: parentId,
            children: []
        };


        let updatedArray = this.recursAdding(updatedCategories, newItem);

        console.log(updatedArray);

        this.setState({
            categories: updatedArray
        })
    };


    getName() {
        let prompt1 = prompt('type name');

        return prompt1
    }


    render() {
        let { isSidebarVisible } = this.state;
        return (
            <div className="Container">
                <Header toggleSidebar={ this.toggleSidebar }
                        isOpened={ this.state.isSidebarVisible } />

                { isSidebarVisible && <Sidebar categories={ this.state.categories } getName = {this.getName} addCategory={ this.addCategory }/> }


                <MainContent/>
            </div>
        );
    }
}

