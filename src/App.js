import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Info from './components/Info';
import Skills from './components/Skills';
import Works from './components/Works';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <>
    <input type='checkbox' id='darkmode'/>
    <div className="wrapper">
      <label htmlFor='darkmode' className='dark-mode-toggle'>
      <i class="fa-solid fa-circle-half-stroke"></i>
      </label>
      <Navbar/>
      <Hero/>
      <Info/>
      <Skills/>
      <Works/>
      <About/>
      <Contact/>
    </div>
    </>
  );
}

export default App;
