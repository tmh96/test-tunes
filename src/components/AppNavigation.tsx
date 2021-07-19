import React from 'react'
import {NavLink} from "react-router-dom";

import './AppNavigation.scss';

interface Props {

}

const AppNavigation: React.FC<Props> = () => {
    return (
        <div>
            <nav className="navbar">
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/music">Music</NavLink>
                <NavLink to="/about">About</NavLink>
            </nav>
        </div>
    )
}

export default AppNavigation