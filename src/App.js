import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Skills from './components/Skills';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <input type='checkbox' id='darkmode'/>
    <div className="wrapper">
      <div className='main'>
      <label htmlFor='darkmode' className='dark-mode-toggle'>
      <i class="fa-solid fa-circle-half-stroke"></i>
      </label>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Hero/>}/>
        <Route path='/skills' element ={<Skills/>}/>
        <Route path='/projects' element ={<Works/>}/>
        <Route path='/about-me' element ={<About/>}/>
        <Route path='/contact' element ={<Contact/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
    </>
  );
}

export default App;
