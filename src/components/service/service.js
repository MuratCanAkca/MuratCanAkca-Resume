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
 
      <SectionTitle frontText="Uzmanlıklar" backText="YETENEKLER"/>
      
      <div className="row">
        <div className="col-lg-11 mx-auto">
          <div className="row">
            <div className="col-md-6">

            <Services icon={<FaJava/>} title="Java" desc="Core Java , OOP konsept , Lambda Expression ve Collection yapıları"/>
               
            </div>
            <div className="col-md-6">
              
            <Services icon={<AiFillApi/>} title="API" desc="JSON , Swagger dökümantasyonu , Postman endpoint denetimi"/>
            </div>
            <div className="col-md-6">
              
            <Services icon={<BsFillDatabaseFill/>} title="Database / Veritabanı" desc="SQL sorguları , Inner Join sorguları , Database Management , View ve Trigger Yapıları , MySQL , MsSQL , PostgreSQL , MongoDB"/>
            </div>

            <div className="col-md-6">
              
            <Services icon={<BsFillPaletteFill/>} title="Web Designer / Frontend" desc="Html , Css , Bootstrap , JavaScript ile web dizaynı , Sass ve Scss kullanımları , Reactstrap yapıları"/>
 
            </div>

            <div className="col-md-6">
              
            <Services icon={<DiCodeBadge/>} title="Backend" desc="Spring ile Restful Backend yapımı , MVC mimarisi ,  Hibernate ile veritabanı bağlantısı , Token Bearer authorization ve Yetkilendirme "/>
            
            </div>

            <div className="col-md-6">
              
            <Services icon={<FaReact/>} title="React Js / Frontend" desc="React Js , React Redux , Axios ile Backend bağlantılı dinamik web sayfası yapımı , Template ile yetkili sayfalar , React Router ile yönlendirme işlemleri "/>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Service