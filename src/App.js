import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutKaua } from './pages/AboutKaua';
import { AboutDrar } from './pages/AboutDrar';
import { NotFound } from './pages/NotFound';
import { Menu } from './components/Menu';

function App() {
  return (
    <div>
      <header>
        <Menu/>
      </header>
      <div>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/sobre" element={<About />}/>
          <Route path="/sobre/kaua" element={<AboutKaua />}/>
          <Route path="/sobre/drar" element={<AboutDrar />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
