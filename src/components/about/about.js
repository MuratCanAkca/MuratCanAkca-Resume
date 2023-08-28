import React from 'react'
import SectionTitle from '../common/section-title/section-title'
import Counter from './counter'
import "./about.scss"

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container px-lg-5"> 

        <SectionTitle frontText="Bilgiler" backText="Hakkımda"/>
        
        <div className="row gy-5">
          <div className="col-lg-7 col-xl-8 text-center text-lg-start">
            <h2 className="text-7 fw-600 mb-3">Ben <span className="span">Murat Can Akça,</span> Bilgisayar Mühendisiyim</h2>
            <p>Merhabalar , ben Murat. Üniversite mezunuyum. Kendimi sürekli geliştirip, bu gelişimi ve kazandığım tecrübeleri uygulayabileceğim, paylaşabileceğim, vizyon sahibi, sürekli gelişimi kendine hedef edinmiş bir firmada kariyer hayatıma başlamak istiyorum. </p>
            <p>Üniversite hayatı boyunca daha çok yazılım alanına ilgi duydum ve bu alanda kendimi geliştirip , çalışmalar yaptım. Üniversitede çeşitli otomasyonlar yazdım. Bitirme tezi olarak Rent a Car web sitesi hazırladım </p>
            <p>Çalıştığım diller ve teknolojiler için aşağıda Yetenekler kısmına daha detaylı bakabilirsiniz</p>
            <p>Yaptığım çalışmalar ve projeler için İletişim kısmında Github linkime tıklayarak Github profilime bakabilirsiniz</p>
          </div>
          <div className="col-lg-5 col-xl-4 div2">
            <div className="ps-lg-4">
              <ul className="list-style-2">
                <li className=""><span className="fw-600 me-2 spanspan">İsim:</span>Murat Can Akça</li>
                <li className=""><span className="fw-600 me-2 spanspan">Email:</span><a href="mailto:muratcan_akca28@hotmail.com">muratcan_akca28@hotmail.com</a></li>
                <li className=""><span className="fw-600 me-2 spanspan">Yaş:</span>24</li>
                <li className="border-0"><span className="fw-600 me-2 spanspan">Şehir:</span>İstanbul , Türkiye</li>
              </ul>
              <a href="pdf/MuratCanAkcaCv.pdf" className="btn  rounded-pill">CV İndir</a> </div>
          </div>
        </div>
        <div className="brands-grid separator-border mt-5">
          <div className="row">
            <div className="col-6 col-md-3">

            {/* <Counter name="Happy Clients" value="250" sign ="+" /> */}

            </div>
            <div className="col-6 col-md-3">
              
            {/* <Counter name="Tecrübe" value="1" sign ="+" /> */}

            </div>
            <div className="col-6 col-md-3">
               
            {/* <Counter name="Bitirilmiş Projeler" value="35" sign ="+" />
 */}
            </div>
            <div className="col-6 col-md-3">
              
           {/*  <Counter name="Get Awards" value="38" sign =" " /> */}

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About