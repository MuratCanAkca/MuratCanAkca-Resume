import React from 'react'
import SectionTitle from '../common/section-title/section-title'
import ContactInfo from './contact-info'
import ContactForm from './contact-form'
import "./contact.scss"


const Contact = () => {
  return (
    
    <section id="contact" className="section bg-light">
    <div className="container px-lg-5">
     
      <SectionTitle frontText="İletişim" backText="İLETİŞİM" />
     
      <div className="row gy-5">
        <div className="col-md-4 col-xl-6 order-1 order-md-0 text-center text-md-start">
           <ContactInfo/>
        </div>
        <div className="col-md-8 col-xl-6 order-0 order-md-1 div1">
           
           <ContactForm/>

        </div>
      </div>
    </div>
  </section>
 
    
  )
}

export default Contact