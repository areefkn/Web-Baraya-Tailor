import { Routes, Route, Navigate } from 'react-router-dom';


import NavbarComponents from './components/NavbarComponents';
import FooterComponents from './components/FooterComponents';
import  './dist/css/App.css';
import './dist/css/Navbar.css';
import './dist/css/Home.css';
import './dist/css/Galeri.css';
import './dist/css/Faq.css';
import './dist/css/lokasi.css';
import './dist/css/tentang-kami.css';

import HomePage from './pages/HomePage';
import GaleriPage from './pages/GaleriPage';
import FaqPage from './pages/FaqPage';
import LokasiPage from './pages/LokasiPage';
import TentangKamiPage from './pages/TentangKamiPage';

function App() {
  return (
    <div>

      <NavbarComponents />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/galeri" element={<GaleriPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/lokasi" element={<LokasiPage/>}/>
        <Route path="/tentangkami" element={<TentangKamiPage/>} />
      </Routes>
      <FooterComponents />
    </div>
  );
}

export default App;
