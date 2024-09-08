// src/Components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Styles/navbar.style.scss';

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>All</NavLink>
      <NavLink to='/desserts' className={({ isActive }) => (isActive ? 'active' : '')}>Desserts</NavLink>
      <NavLink to='/burgers' className={({ isActive }) => (isActive ? 'active' : '')}>Burgers</NavLink>
      <NavLink to='/pizzas' className={({ isActive }) => (isActive ? 'active' : '')}>Pizzas</NavLink>
      <NavLink to='/soup' className={({ isActive }) => (isActive ? 'active' : '')}>Soup</NavLink>
      <NavLink to='/hot-drinks' className={({ isActive }) => (isActive ? 'active' : '')}>Hot Drinks</NavLink>
      <NavLink to='/cold-drinks' className={({ isActive }) => (isActive ? 'active' : '')}>Cold Drinks</NavLink>
      <NavLink to='/drinks' className={({ isActive }) => (isActive ? 'active' : '')}>Drinks</NavLink>
      <NavLink to='/salads' className={({ isActive }) => (isActive ? 'active' : '')}>Salads</NavLink>
      <NavLink to='/starter' className={({ isActive }) => (isActive ? 'active' : '')}>Starter & Sandwiches</NavLink>
    </div>
  );
};

export default Navbar;
