import './App.css'
import Home from './Component/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Details from './Page/Details';
import Education from './Page/Education';
import Experience from './Page/Experience';
import Footer from './Page/Footer';
import Project from './Page/Project';
import Skill from './Page/Skill';
import { ToastContainer } from 'react-toastify';

function App() {


  return (
    <div className='bg-slate-950'>
      <ToastContainer/>
      <Home></Home>
      <Details/>
      <About />
      <Education />
      <Skill />
      <Experience />
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;