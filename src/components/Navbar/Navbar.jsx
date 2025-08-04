import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">MyApp</Link>
            </div>
            <button className="navbar-toggler" onClick={toggleMenu}>
                {isOpen ? 'Close' : 'Menu'}
            </button>
            <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/about" className="navbar-item">About</Link>
                <Link to="/contact" className="navbar-item">Contact</Link>
            </div>
        </nav>
    );
}
