import React from 'react'
import './navbar.scss'

function navbar() {
  return (
    <nav className="navbar">
        <a href="/" className="site-title"><span className="highlight">LOGO</span></a>
        <ul className="navbar-list">

            <li>
                <a href="/home">Home</a>
            </li>
            <li>
                <a href="/plans">Plans</a>
            </li>
            <li>
                <a href="/contact">Contact</a>
            </li>

        </ul>
    </nav>
  )
}

export default navbar