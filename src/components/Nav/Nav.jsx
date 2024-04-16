import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import './nav.css'

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/all">All Cards</Link>
        </li>
        <li>
          <Link to="/suit">By Suit</Link>
        </li>
        <li>
          <Link to="/filter">Filter</Link>
        </li>
      </ul>
    </nav>
  );
};