import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header__inner">

        {/* Left Icons */}
        <div className="header__left">
          <button className="icon-btn" aria-label="Search">
            🔍
          </button>

          <div className="currency">
            <span>PKR ▾</span>
            <ul className="currency__dropdown">
              <li>USD</li>
              <li>AED</li>
            </ul>
          </div>
        </div>

        {/* Logo */}
        <div className="header__logo">
          <Link to="/">
            <img
              src="https://www.zeromakeup.com/cdn/shop/files/ZM_logo.png"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Right Icons */}
        <div className="header__right">
          <button className="icon-btn">👤</button>
          <button className="icon-btn">
            🛒 <span className="cart-count">0</span>
          </button>

          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="mobile-nav">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
        </nav>
      )}
    </header>
  );
};

export default Header;
