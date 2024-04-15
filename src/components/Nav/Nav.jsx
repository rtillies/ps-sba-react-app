import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/all">All Cards</Link>
        </li>
        <li>
          <Link to="/suit">By Suit</Link>
        </li>
        <li>
          <Link to="/rank">By Rank</Link>
        </li>
      </ul>
    </nav>
  );
};