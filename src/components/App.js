import React, { Component } from "react";
import '../styles/App.css';
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";

export class App extends Component {
    state = { isSidebarVisible: true };

    toggleSidebar = () => {
        this.setState({
            isSidebarVisible: !this.state.isSidebarVisible
        });
    };

    render() {
        let { isSidebarVisible } = this.state;
        return (
            <div className="Container">
                <Header toggleSidebar={ this.toggleSidebar }
                        isOpened={ this.state.isSidebarVisible } />

                { isSidebarVisible && <Sidebar /> }


                <MainContent/>
            </div>
        );
    }
}

