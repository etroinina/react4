import React, { Component } from "react";
import '../styles/SidebarButton.css';

export class SidebarButton extends Component {
    state = {
        buttonName: 'Sidebar'
    };

    render() {
        return (
            <button className="SidebarButton-button" onClick={ () =>  this.props.toggleSidebar() }> {this.state.buttonName} </button>
        );
    }
}
