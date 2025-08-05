import { useState } from "react";
import { Link } from "react-router-dom";
import './navbar.css';
import logo from '../../assets/logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <Link to="/" className="brand-link">
                        <div className="logo">
                            <img src={logo} alt="TenTEX Logo" style={{ height: 42 }} />
                        </div>
                    </Link>
                </div>

                <button className="navbar-toggler" onClick={toggleMenu}>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                <div className={`navbar-menu ${isOpen ? 'is-active' : ''}`}>
                    <Link to="/" className="navbar-item">HOME</Link>
                    <Link to="/about" className="navbar-item">A TENTEX</Link>
                    <Link to="/representadas" className="navbar-item">REPRESENTADAS</Link>
                    <Link to="/products" className="navbar-item">PRODUTOS</Link>
                    <Link to="/services" className="navbar-item">SERVIÇOS</Link>
                    <Link to="/contact" className="navbar-item">CONTATO</Link>
                </div>
            </div>
        </nav>
    );
}