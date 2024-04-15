import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

export default () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/display">Display</Link>
        </li>
      </ul>
    </nav>
  );
};