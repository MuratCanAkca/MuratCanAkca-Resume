import React from 'react'
import logo from "../../assets/img/foto.jpeg"
import "./logo.scss"

const Logo = () => {
  return (
    <a href='/' className='mb-lg-auto mt-lg-4'>
        <span className='bg-dark-2 rounded-pill p-2 mb-lg-1 d-none d-lg-inline-block spanspan'>
            <img className='img-fluid rounded-pill d-block' src={logo} title='murat' alt=''/>
        </span>
        <h1 className=' text-white text-center mb-0 d-lg-block h1h1'>Murat Can Akça</h1>
    </a>

  )
}

export default Logo