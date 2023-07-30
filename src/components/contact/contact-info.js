import React from 'react'
import {BsFillTelephoneFill} from "react-icons/bs"
import {AiFillMail} from "react-icons/ai"
import "./contact-info.scss"

const ContactInfo = () => {
  return (
   <>
   
   <h2 className="mb-3 text-5 text-uppercase">Adres</h2>
          <p className="text-3 mb-4"> İNÖNÜ MAH. YAŞARDOĞU CAD. <br/>
          
          KÜÇÜKÇEKMECE / İSTANBUL </p>
             
          <p className="text-3 mb-1"><span className="text-primary text-4 me-2 span"><BsFillTelephoneFill/></span>0 (534) 685 07 25</p>
          <p className="text-3 mb-4"><span className="text-primary text-4 me-2 span"><AiFillMail/></span>muratcan_akca28@hotmail.com</p>
          <h2 className="mb-3 text-5 text-uppercase"></h2>
          <ul className="social-icons justify-content-center justify-content-md-start">
            <li className="social-icons-dribbble"><a data-bs-toggle="tooltip" href="http://www.dribbble.com/harnishdesign/" target="_blank" title="Dribbble"><i className="fab fa-dribbble"></i></a></li>
            <li className="social-icons-twitter"><a data-bs-toggle="tooltip" href="https://twitter.com/harnishdesign/" target="_blank" title="Twitter"><i className="fab fa-twitter"></i></a></li>
            <li className="social-icons-facebook"><a data-bs-toggle="tooltip" href="http://www.facebook.com/harnishdesign/" target="_blank" title="Facebook"><i className="fab fa-facebook-f"></i></a></li>
            <li className="social-icons-google"><a data-bs-toggle="tooltip" href="http://www.google.com/" target="_blank" title="Google"><i className="fab fa-google"></i></a></li>
            <li className="social-icons-github"><a data-bs-toggle="tooltip" href="http://www.github.com/" target="_blank" title="GitHub"><i className="fab fa-github"></i></a></li>
          </ul>

   </>
  )
}

export default ContactInfo