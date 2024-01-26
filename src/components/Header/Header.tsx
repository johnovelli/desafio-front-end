import { Link } from 'react-router-dom';
import trybeLogo from '../../assets/trybe-logo.png';
import './header.css';

function Header() {
  return (
    <header>
      <div className="header">
        <div className="header-content">
          <img src={ trybeLogo } alt="logo da trybe" />
          <h1>TRYBE NEWS</h1>
        </div>
      </div>
      <nav className="header-links">
        <Link to="/desafio-front-end/">Mais recentes</Link>
        <Link to="/desafio-front-end/noticia">Notícia</Link>
        <Link to="/desafio-front-end/release">Release</Link>
        <Link to="/desafio-front-end/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}

export default Header;
