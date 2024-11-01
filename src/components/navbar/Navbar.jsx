// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthContext';
import '../../components/navbar/style.css';

function Navbar() {
    const { user, logout } = useAuthContext();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src="images/logo.webp" alt="GuitarLink Logo" />
                </Link>
            </div>

            {/* Основне навігаційне меню */}
            <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
                <li><Link to="/">Головна</Link></li>
                <li><Link to="/contacts">Зв'язок з нами</Link></li>
                <li><Link to="/about">Про нас</Link></li>
                {user ? (
                    <>
                        <li><button onClick={logout} className="logout-button">Вийти</button></li>
                    </>
                ) : (
                    <li><Link to="/login">Вхід</Link></li>
                )}
            </ul>

            {/* Іконка меню для неавторизованих і користувача для авторизованих */}
            <div className="menu-icon" onClick={toggleMenu}>
                {!user ? (
                    <>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </>
                ) : (
                    <img src="images/user-icon.png" alt="User Icon" className="user-icon-image" />
                )}
            </div>
        </nav>
    );
}

export default Navbar;
