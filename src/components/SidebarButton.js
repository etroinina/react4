import React, { Component } from "react";
import '../styles/SidebarButton.css';

export class SidebarButton extends Component {
    state = {
        buttonName: 'Sidebar'
    };

    render() {
        const { toggleSidebar } = this.props;
        return (
            <button className="SidebarButton-button" onClick={ () => toggleSidebar() }> {this.state.buttonName} </button>
        );
    }
}
