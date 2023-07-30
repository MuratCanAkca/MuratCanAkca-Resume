import React from 'react'
import {TypeAnimation} from "react-type-animation"
import {BsFillCaretDownFill} from "react-icons/bs"
import "./intro.scss"

const Intro = () => {
  return (
    <section className='home' id="home">
    <div className="hero-wrap backgro">
      <div className="hero-mask opacity-8 bg-dark"></div>
      <div className="hero-bg parallax " style={{backgroundImage:"url('images/background.jpeg')"}}></div>
      <div className="hero-content section d-flex min-vh-100 divdiv">
        <div className="container my-auto">
          <div className="row">
            <div className="col-12 text-center">
            <p className="text-7 fw-500 text-white mb-2 mb-md-3 p2">Welcome</p>

            <h1 className='text-white text-18'>
              <TypeAnimation
                sequence={[
                  
                  "Computer Engineer",
                  2000,
                  "Software Engineer",
                  2000,
                  "Full Stack Developer",
                  2000,
                  "Web Designer",
                  2000,
                  () => {
                    console.log("Done Typing");
                  },
                ]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                speed={10}
                />

            </h1>

            
              
              <h2 className="text-16 fw-600 text-white mb-2 mb-md-3"><span className="typed"></span></h2>
              <p className="text-5 text-light mb-4 p3" >İstanbul / Türkiye</p>
              
            </div>
          </div>
        </div>
        <a href="#about" className="scroll-down-arrow text-white smooth-scroll aaa"><span className="animated"><BsFillCaretDownFill/></span></a> </div>
    </div>
  </section>
  )
}

export default Intro