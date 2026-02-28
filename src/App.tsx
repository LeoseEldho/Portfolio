import './App.css'
import Home from './Component/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import Details from './Page/Details';
import Education from './Page/Education';
import Experience from './Page/Experience';
import Footer from './Page/Footer';
import Skill from './Page/Skill';

function App() {


  return (
    <div className='bg-gray-100 dark:bg-slate-950'>
      <Home></Home>
      <Details/>
      <About />
      <Education />
      <Skill />
      <Experience />
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;