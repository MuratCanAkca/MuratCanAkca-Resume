import React from 'react'
import {BsTwitter , BsWhatsapp , BsGithub ,BsInstagram , BsLinkedin} from  'react-icons/bs';
import "./contact-form.scss"

const ContactForm = () => {
  return (
    <>

                  
<h2 className="mb-3 text-5 text-uppercase">Sosyal Medya</h2>
          <ul className="social-icons justify-content-center justify-content-md-start">

            <li className='social-icons-dribbble lili'><a className='aa' data-bs-toggle="tooltip" href='https://wa.me/905346850725/' target='_blank' aria-label='whatsapp'><BsWhatsapp/>  Whatsapp</a></li>
            <li className="social-icons-dribbble lili"><a className='aa' data-bs-toggle="tooltip" href="https://www.linkedin.com/in/murat-can-ak%C3%A7a-812619278/" target="_blank" title="linkedin"><BsLinkedin/>  Linkedin</a></li>
            <li className="social-icons-dribbble lili"><a className='aa' data-bs-toggle="tooltip" href="https://github.com/MuratCanAkca" target="_blank" title="github"><BsGithub/>  Github</a></li>
            <li className="social-icons-dribbble lili"><a className='aa' data-bs-toggle="tooltip" href="https://www.instagram.com/muratcanakca/" target="_blank" title="instagram"><BsInstagram/>  İnstagram</a></li>
            <li className="social-icons-dribbble lili"><a className='aa' data-bs-toggle="tooltip" href="https://twitter.com/murattcanakca" target="_blank" title="twitter"><BsTwitter/>  Twitter</a></li>
           
          </ul>

    
    </>
  )
}

export default ContactForm