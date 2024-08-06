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
import './dist/css/RequestCustomForm.css';
import './dist/css/ProductDetailPage.css'

import HomePage from './pages/HomePage';
import GaleriPage from './pages/GaleriPage';
import FaqPage from './pages/FaqPage';
import LokasiPage from './pages/LokasiPage';
import TentangKamiPage from './pages/TentangKamiPage';
import ProductDetailPage from './components/ProductDetailPage.jsx';
import RequetsCustom from './components/RequetsCustomForm.jsx';

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
        <Route path="/product/:id" element={<ProductDetailPage />} /> {/* Rute untuk halaman detail produk */}
        <Route path="/pesan-kustom" element={<RequetsCustom/>} />
      </Routes>
      <FooterComponents />
    </div>
  );
}

export default App;
