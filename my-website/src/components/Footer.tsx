import { Link } from "react-router-dom";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__inner">

        {/* Brand */}
        <div className="footer__brand">
          <img
            src="https://www.zeromakeup.com/cdn/shop/files/ZM_logo.png"
            alt="Zero Makeup Logo"
          />
          <p>
            Quality products crafted with care. Trusted by customers across
            Pakistan.
          </p>
        </div>

        {/* Links */}
        <div className="footer__links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Support */}
        <div className="footer__links">
          <h4>Support</h4>
          <Link to="/faq">FAQ</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms & Conditions</Link>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer__bottom">
        © {new Date().getFullYear()} Zero Makeup. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
