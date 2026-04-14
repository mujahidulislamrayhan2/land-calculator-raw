import React from "react";
import { Link } from "react-router-dom";

import './navbar.css'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/privacy">Privacy</Link>
    </div>
  );
}