import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutKaua } from './pages/AboutKaua';
import { AboutDrar } from './pages/AboutDrar';
import { NotFound } from './pages/NotFound';
import { Relatar } from './pages/Relatar';
import { RelatarAnonimamente } from './pages/RelatarAnonimamente';
import { RelatarIdentificado } from './pages/RelatarIdentificado';

function App() {
  return (
    <div className='body'>
      <header>
        <Menu/>
      </header>
      <main>
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/sobre" element={<About />}/>
            <Route path="/sobre/kaua" element={<AboutKaua />}/>
            <Route path="/sobre/drar" element={<AboutDrar />}/>
            <Route path="/relatar" element={<Relatar />}/>
            <Route path="/relatar/anonimo" element={<RelatarAnonimamente />}/>
            <Route path="/relatar/identificado" element={<RelatarIdentificado />}/>
            <Route path="*" element={<NotFound />}/>
          </Routes>
      </main>
      
      <footer>
        <Footer className="footer"/>
      </footer>
    </div>
  );
}

export default App;
