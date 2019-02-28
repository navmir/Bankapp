import React from 'react'
import { NavLink } from "react-router-dom";

import './navigation.scss'

const Navigation = () => {
    return (
        <div className="nav-items">
            <NavLink to="/start">Startsida</NavLink>
            <NavLink to="/applyloan">Ansök om lån</NavLink>
        </div>
    );
}

export default Navigation