import React from 'react';
import { NavLink } from 'react-router-dom';

function NavBar() {
  const links = [
    {
      name: 'home',
      path: '/',
    },
    {
      name: 'categories',
      path: 'categories',
    },
  ];
  return (
    <nav>
      <h1>Aman Bookstore</h1>
      <ul>
        {links.map((link) => (
          <li key={link.name}>
            <NavLink to={link.path}>{link.name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
