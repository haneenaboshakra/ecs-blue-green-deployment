// src/components/DropdownMenu.js
import React from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();
function DropdownMenu({ items, onClick }) {
  return (
    <ul className="dropdown-menu" >
      {items.map((item, index) => (
        <li key={index} className="dropdown-menu-list">
          <Link to={item.path} onClick={onClick} className="dropdown-menu-link">
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default DropdownMenu;
