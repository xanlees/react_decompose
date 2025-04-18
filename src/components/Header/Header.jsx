// import a css file containig header styles

// Create a Header function returning the HTML of header block

// Add a default export statement for Header component to use it in the other files


import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__title">Now is my Site Name</h1>
      <nav className="navigation">
        <a className="navigation__link" href="#about">About</a>
        <a className="navigation__link" href="#services">Services</a>
        <a className="navigation__link" href="#contact">Contact</a>
      </nav>

    </header>
  )
}

export default Header