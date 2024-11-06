import React, { useContext, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import cart_icon from '../../assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { getTotalCartItems } = useContext(ShopContext);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="Logo" />
                <p>Family Shopping</p>
            </div>

            <div className="nav-hamburger" onClick={toggleMenu}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            <div className={`nav-menu2 ${isMenuOpen ? 'active' : ''}`}>
                <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
                    <li onClick={() => { setMenu("shop") }}>
                        <Link style={{ textDecoration: 'none' }} to="/" onClick={handleLinkClick}>Shop</Link>
                        {menu === "shop" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("mens") }}>
                        <Link style={{ textDecoration: 'none' }} to="/mens" onClick={handleLinkClick}>Men</Link>
                        {menu === "mens" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("womens") }}>
                        <Link style={{ textDecoration: 'none' }} to="/womens" onClick={handleLinkClick}>Women</Link>
                        {menu === "womens" ? <hr /> : <></>}
                    </li>
                    <li onClick={() => { setMenu("kids") }}>
                        <Link style={{ textDecoration: 'none' }} to="/kids" onClick={handleLinkClick}>Kids</Link>
                        {menu === "kids" ? <hr /> : <></>}
                    </li>
                </ul>

                <div className={`nav-login-cart ${isMenuOpen ? 'active' : ''}`}>
                    <Link to='/login' onClick={handleLinkClick}><button>Login</button></Link>
                    <Link to='/cart' onClick={handleLinkClick}>
                        <img src={cart_icon} alt="Cart Icon" />
                        <div className="nav-cart-count">{getTotalCartItems()}</div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
