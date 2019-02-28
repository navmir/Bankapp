import React from 'react'
import { NavLink } from "react-router-dom";

import './navigation.scss'

const Navigation = () => {
    return (
        <div className="nav-items">
            <NavLink to="/">Startsida</NavLink>
            <NavLink to="/ansokan">Ansök om lån</NavLink>
        </div>
    );
}

export default Navigation