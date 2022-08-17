import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/home/index';
import About from "./containers/about/index";
import Contact from './containers/contact/index';
import Portfolio from './containers/portfolio/index';
import Resume from './containers/resume/index';
import Skills from './containers/skills/index';

import Navbar from './components/NavBar';
import particlesConfig from './helpers/particlesConfig';
import Theme from './components/theme';
function App() {

  const location = useLocation();
  const particlesInit = async (main) => {
    await loadFull(main)
  }


  const currPageisHome = location.pathname === "/";
  return (
    <div className="App">
      {/* Particles js */}
      {
        currPageisHome && (
          <Particles
            id="particles"
            options={particlesConfig}
            init={particlesInit}
          />
        )}
      {/* NavBar components */}
      <div className="App_navbar-wrapper">
        <Navbar />
      </div>
      {/* Main Page Content*/}
      <div className="App_main-content-wrapper">
        <Theme />


        <Routes>
          {/*Create All Routes*/}
          <Route path='/' index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;
