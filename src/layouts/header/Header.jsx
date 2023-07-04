import React from 'react'

export default function Header() {
  return (
    <header className='header'>
      <div className='container container-nav'>
        <div className='logo'>
          <h1>Living the simple Life</h1>
          <p>a blog exploring minimalism in life</p>
        </div>

        <nav>
          <ul>
            <li>Home</li>
            <li>About me</li>
            <li>Recent posts</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}