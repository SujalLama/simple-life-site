import React from 'react';
import "./header.css";
import { Link, NavLink } from 'react-router-dom';

const navData = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'About me',
    link: '/about',
  },
  {
    name: 'Recent Posts',
    link: '/recent-posts',
  }
]

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
            {
              navData.map((navItem) => {
                const {name, link} = navItem;

                return <li className='nav-list-item'>
                  <NavLink to={link} className={({isActive}) => isActive ? 'nav-list-link active' : 'nav-list-link'}>{name}</NavLink></li>;
              })
            }
            
          </ul>
        </nav>
      </div>
    </header>
  )
}
