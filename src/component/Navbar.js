import React from 'react';
import { NavLink } from 'react-router-dom';
function Navbar(props) {
    return (
        <div>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/list">List</NavLink>
        </div>
    );
}

export default Navbar;