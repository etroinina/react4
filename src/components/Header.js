import React from "react";
import '../styles/Header.css';

const SidebarButton = ({ toggleSidebar, isOpened }) => {
    console.log('isOpened: ' + isOpened);
    return (
        <button className="SidebarButton-button" onClick={ () =>  toggleSidebar() }>
            <span>
                { isOpened ? 'Hide' : 'Show'}
            </span>
        </button>
    )
};


export const Header = ({ toggleSidebar, isOpened }) => {
    return (
        <div className='Header'>
            <SidebarButton toggleSidebar={ toggleSidebar } isOpened={ isOpened } />
            <span className='welcome-text'> { 'Welcome, user' }</span>
        </div>
    )
};
