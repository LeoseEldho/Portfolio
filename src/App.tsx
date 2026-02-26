import './App.css'
import Home from './Page/Home';
import About from './Page/About';
import Details from './Page/Details';

function App() {


  return (
    <div className='bg-gray-100 dark:bg-slate-950'>
      <Home></Home>
      <Details/>
      <About/>
    </div>
  )
}

export default App;