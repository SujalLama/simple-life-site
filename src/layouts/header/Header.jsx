import React from 'react';
import "./header.css";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
      <div className='container container-nav'>
        <div className='logo'>
          <h1>Living the simple Life</h1>
          <p>a blog exploring minimalism in life</p>
        </div>

        <nav>
          <ul className='nav-list'>
            <li className='nav-list-item'><Link to="/" className='nav-list-link'>Home</Link></li>
            <li><Link to="/about" className='nav-list-link'>About me</Link></li>
            <li><Link to="/recent-posts" className='nav-list-link'>Recent posts</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
