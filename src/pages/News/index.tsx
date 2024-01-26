import { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import SearchInput from '../../components/SearchInput';
import Hightlight from '../../components/Highlight';
import NewsCards from '../../components/NewsCards';
import { NewsListType } from '../../types';
import './news.css';

function News() {
  const { ibgeNews } = useContext(AppContext);
  const [renderedList, setRenderedList] = useState<NewsListType | undefined>(undefined);

  useEffect(() => {
    setRenderedList(ibgeNews);
  }, [ibgeNews]);

  const handleSearch = (filteredNews: NewsListType) => {
    setRenderedList(filteredNews);
  };

  return (
    <main className="news-main">
      {renderedList && ibgeNews ? (
        <div>
          <Hightlight highlight={ ibgeNews[0] } />
          <SearchInput list={ ibgeNews } onSearch={ handleSearch } />
          {renderedList.length > 0 ? (
            <NewsCards newsList={ renderedList } />
          ) : <p className="no-news-found">Nenhuma notícia encontrada</p>}
        </div>
      ) : <p className="loading">Loading</p>}
    </main>
  );
}

export default News;
