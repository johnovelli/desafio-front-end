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
        <Link to="/">Mais recentes</Link>
        <Link to="/noticia">Notícia</Link>
        <Link to="/release">Release</Link>
        <Link to="/favoritos">Favoritos</Link>
      </nav>
    </header>
  );
}

export default Header;
