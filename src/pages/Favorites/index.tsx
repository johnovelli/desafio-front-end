import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import NewsCards from '../../components/NewsCards';
import './favorites.css';

function Favorites() {
  const { favoriteList } = useContext(AppContext);

  return (
    <main className="favorites-main">
      {favoriteList.length > 0 ? (
        <NewsCards newsList={ favoriteList } />
      ) : (
        <h2>Adicione notícias ao favoritos</h2>
      )}
    </main>
  );
}

export default Favorites;
