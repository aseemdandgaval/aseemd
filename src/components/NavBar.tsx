import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Blog' }
];

export default function NavBar() {
  return (
    <nav className="flex space-x-4">
      {links.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={({ isActive }) =>
            (isActive ? 'underline ' : '') + 'hover:underline'
          }
        >
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}