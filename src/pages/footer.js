import React from "react";
import { Link } from "react-router-dom";

import "./footer.css"

export default function Footer() {
  return (
    <footer className="footer">

      <p>© 2026 Land Calculator</p>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy Policy</Link>
      </div>

    </footer>
  );
}