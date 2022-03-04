import React from 'react'
import {NavLink} from "react-router-dom";

export const Navbar: React.FC = () => {
  return (
    <nav className="px1 blue-grey darken-1">
      <div className="nav-wrapper">
        <NavLink to="/" className="brand-logo">
          TodoApp
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <NavLink to="/todos">Todo List</NavLink>
          </li>
          <li>
            <NavLink to="/about">Info</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}
