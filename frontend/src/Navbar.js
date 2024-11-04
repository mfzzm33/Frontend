// Navbar.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li><Link to="/" className="navbar-link">Home</Link></li>
                <li><Link to="/2D" className="navbar-link">2D View</Link></li>
                <li><Link to="/3D" className="navbar-link">3D View</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
