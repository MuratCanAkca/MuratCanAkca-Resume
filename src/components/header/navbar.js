import React from 'react'
import "./navbar.scss"

const Navbar = () => {
  return (
    <div id='header-nav' className='collapse navbar-collapse   my-lg-auto'>
        <ul className='navbar-nav text-lg-center my-lg-auto py-lg-3'>

            <li className='nav-item'>
                <a className='nav-link smooth-scroll' href='#home'>Anasayfa</a>
            </li>

            <li className='nav-item'>
                <a className='nav-link smooth-scroll' href='#about'>Hakkımda</a>
            </li>

            <li className='nav-item'>
                <a className='nav-link smooth-scroll' href='#services'>Yeteneklerim</a>
            </li>

            <li className='nav-item'>
                <a className='nav-link smooth-scroll' href='#resume'>Özgeçmiş</a>
            </li>

            <li className='nav-item'>
                <a className='nav-link smooth-scroll' href='#contact'>İletişim</a>
            </li>

            

        </ul>
    </div>
  )
}

export default Navbar