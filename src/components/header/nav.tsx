import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="brand">
                <h2>Nathan</h2>
            </div>
            <div className="nav-list-container">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/about" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/skills" className="nav-link">Skills</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/experience" className="nav-link">Experience</Link>
                    </li>
                </ul>
            </div>
            {/* TODO: Add github and linkedin icons */}
        </nav>
    );
};

export default Nav;