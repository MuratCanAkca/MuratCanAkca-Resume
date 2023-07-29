import React from 'react'
import SectionTitle from '../common/section-title/section-title'
import {BsFillPaletteFill , BsFillDatabaseFill} from "react-icons/bs"
import {FaJava , FaReact} from "react-icons/fa"
import {DiCodeBadge} from "react-icons/di"
import {AiFillApi} from "react-icons/ai"
import Services from './services'

const Service = () => {
  return (
    <section id="services" className="section bg-light">
    <div className="container px-lg-5"> 
 
      <SectionTitle frontText="Çalışmalar" backText="YETENEKLERİM"/>
      
      <div className="row">
        <div className="col-lg-11 mx-auto">
          <div className="row">
            <div className="col-md-6">

            <Services icon={<FaJava/>} title="Java" desc="Öğrendiğim ilk dil olan Java dilinde , OOP mantığı , Lambda kullanımları ve Collection yapılarına hakimim"/>
               
            </div>
            <div className="col-md-6">
              
            <Services icon={<AiFillApi/>} title="API" desc="Backend kısmında yazılan endpointler ile Postman uygulamasında APİ denetimi ve Swagger dökümantasyonu çalışması"/>
            </div>
            <div className="col-md-6">
              
            <Services icon={<BsFillDatabaseFill/>} title="Veritabanı" desc="PostgreSQL , MySQL , MsSQL , MongoDB ile çalıştım. SQL dilinide hakimim. CRUD işlemleri ve inner join sorguları "/>
            </div>
            <div className="col-md-6">
              
            <Services icon={<DiCodeBadge/>} title="Backend" desc="Spring ile MVC yapısı kullanarak Restful Backend tasarımı. Hibernate ve JDBC ile veritabanı bağlantısı. Token Bearer ile backend güvenliği "/>
            
            </div>
            <div className="col-md-6">
              
            <Services icon={<BsFillPaletteFill/>} title="Web Dizayn" desc="HTML , CSS , SCSS , BOOTSTRAP , JAVASCRİPT ile web dizaynı tasarımları ve çalışmaları"/>
 
            </div>
            <div className="col-md-6">
              
            <Services icon={<FaReact/>} title="Frontend" desc="React dili ile componentler tasarlayarak , Backend bağlantılı dinamik web sitesi çalışmaları "/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Service