import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import Contacto from './pages/Contacto';
import AcercaDeNosotros from './pages/AcercaDeNosotros';
import PaginaBlob from './pages/PaginaBlob';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />

        <div className="pagina">
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/acerca-de-nosotros" element={<AcercaDeNosotros />} />
            <Route path="/blob" element={<PaginaBlob />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
