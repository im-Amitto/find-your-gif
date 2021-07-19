import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li><NavLink to="/trending">Trending</NavLink></li>
        <li><NavLink to="/cat">Cat</NavLink></li>
        <li><NavLink to="/happy">Happy</NavLink></li>
        <li><NavLink to="/anime">Anime</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;
