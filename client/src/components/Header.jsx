import React from 'react'
import "./header.css"
import Logo from './Logo.jsx'
import Nav from './Nav.jsx'
import SearchBar from './SearchBar.jsx'

function Header() {
  return (
    <header id='header' className='header fixed-top d-flex align-items-center'>
       <Logo />
       <SearchBar />
       <Nav />
    </header>
  )
}

export default Header