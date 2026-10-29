import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <h1>Logo de la Empresa</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
        <Link to="/acerca-de-nosotros">Acerca de nosotros</Link>
        <Link to="/blob">Página del Blob</Link>
      </nav>
    </header>
  );
};

export default Header;
