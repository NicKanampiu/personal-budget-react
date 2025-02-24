import React from 'react';
import {
  Link  
} from "react-router-dom";

function Menu() {
  return (
    <nav class="menu" aria-label="Main Navigation">
    <ul>
        <li><Link to="/">Homepage</Link></li>
        <li><Link to="/about.html">About</Link></li>
        <li><Link to="/login.html">Login</Link></li>
    </ul>
</nav>
  );
}

export default Menu;
