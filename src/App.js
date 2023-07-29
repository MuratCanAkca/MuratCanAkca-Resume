import About from './components/about/about';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import Intro from './components/intro/intro';
import Resume from './components/resume/resume';
import Service from './components/service/service';
import logo from './logo.svg';
 

function App() {
  return (
    <>
    <Header/>
    <Intro/>
    <About/>
    <Service/>
    <Resume/>
    <Contact/>
  {/*   <Footer/> */}
    </>
  );
}

export default App;
