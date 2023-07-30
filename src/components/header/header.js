import React from 'react'
import Logo from './logo'
import Navbar from './navbar'
import Social from './social'
import "./header.scss"

const Header = () => {
  return (
    
    <header id='header' className='sticky-top'>

        <nav className='primary-menu navbar navbar-expand-lg navbar-dark bg-dark border-bottom-0 ananav'>

            <div className='container-fluid position-relative h-100 flex-lg-column ps-3 px-lg-3 pt-lg-3 pb-lg-2 divdiv'>

                <Logo/>
                <Navbar/>
                <Social/>

               

            </div>

        </nav>

    </header>

  )
}

export default Header