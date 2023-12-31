import React from 'react'
import SectionTitle from '../common/section-title/section-title'
import ResumeCard from './resume-card'
import Skill from './skill'
import "./resume.scss"

const Resume = () => {
  return (
    <section id="resume" className="section">
      <div className="container px-lg-5"> 
      
      <SectionTitle frontText="Kariyer" backText="ÖZGEÇMİŞ"/>
        
        <div className="row gx-5 div5"> 
         
          <div className="col-md-6">

            <h2 className="text-6 fw-600 mb-4">EĞİTİM</h2>
          
            <ResumeCard date="2017-2022" title="İskenderun Teknik Üniversitesi" subTitle="Bilgisayar Mühendisliği" desc="" />
            <ResumeCard date="2013-2017" title="Ihlamur Temel Lisesi" subTitle="Öğrenci / Alan yok" desc="" />
            
           
          </div>
          
     
          <div className="col-md-6">
            <h2 className="text-6 fw-600 mb-4">DENEYİMLER</h2>

           

            <div className="bg-white border rounded p-4 mb-4">
                <p className="badge bg-primary text-2 fw-400">17/07/2023-18/08/2023</p>
                <h3 className="text-5">Dap Yapı AŞ. | Maltepe-İstanbul</h3>
                <p className="text-danger">Bilgi İşlem / Stajyer Mühendis</p>
                <p className="mb-0">Referans: <br/>
                    Erdem Bozkır<br/>
                    Bilgi İşlem Müd. Yar.<br/> 
                    Tel : 0537 955 77 78</p>
              </div>
           
             
          </div>
        </div>
       
		<h2 className="text-6 fw-600 mt-4 mb-4 div5">PROGRAMLAMA DİLLERİ</h2>
         <div className="row gx-5 " >
          <div className="col-md-6">

          <Skill name="React Js" value="90" />
          <Skill name="JavaScript" value="65" />
          <Skill name="HTML , CSS" value="85" />
          <Skill name="BootStrap , ReactStrap" value="80" />

          </div>

          <div className="col-md-6">

          <Skill name="JAVA" value="90" />
          <Skill name="Spring" value="85" />
          <Skill name="SQL" value="95" />
          <Skill name="Hİbernate , JDBC" value="95" />
            
          </div>
        </div> 
        <div className="text-center mt-5"><a href="pdf/MuratCanAkcaCv.pdf" className="btn btn-outline-secondary rounded-pill shadow-none">CV İNDİR <span className="ms-1"><i className="fas fa-download"></i></span></a></div>
      </div>
    </section>
  )
}

export default Resume