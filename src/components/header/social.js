import React from 'react'
 import "./social.scss"
import {BsTwitter , BsWhatsapp , BsGithub ,BsInstagram , BsLinkedin} from  'react-icons/bs';

const Social = () => {
  return (
    <ul className='mt-lg-auto ms-auto -ms-lg-0 d-flex ul'>

        <li>
            <a data-bs-toggle="tooltip" href='https://wa.me/905346850725/' target='_blank' aria-label='twitter'><BsWhatsapp/></a>
        </li>

        <li>
            <a data-bs-toggle="tooltip" href='https://www.linkedin.com/in/murat-can-ak%C3%A7a-812619278/' target='_blank' aria-label='wp'><BsLinkedin/></a>
        </li>

        <li>
            <a data-bs-toggle="tooltip" href='https://github.com/MuratCanAkca' target='_blank' aria-label='github'><BsGithub/></a>
        </li>

        <li>
            <a data-bs-toggle="tooltip" href='https://www.instagram.com/muratcanakca/' target='_blank' aria-label='instagram'><BsInstagram/></a>
        </li>

        <li>
            <a data-bs-toggle="tooltip" href='https://twitter.com/murattcanakca' target='_blank' aria-label='instagram'><BsTwitter/></a>
        </li>

    </ul>
  )
}

export default Social