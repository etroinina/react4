import React, { Component } from "react";
import { SidebarButton } from "./SidebarButton";
import { Sidebar } from "./Sidebar";
import { MainContent } from "./MainContent";
import '../styles/Container.css';

export class Container extends Component {

    state = { shows: true };

    toggleSidebar = () => {
        this.setState({
            shows: !this.state.shows
        });
    };

    render() {
        return (
            <div className="Container">
                <div className="SidebarButton">
                    <SidebarButton toggleSidebar={ this.toggleSidebar } />
                </div>
                { this.state.shows && <Sidebar /> }

                <MainContent/>
            </div>
        );
    }
}
