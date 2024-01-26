import { useState, useEffect, useContext } from 'react';
import AppContext from '../../context/AppContext';
import SearchInput from '../../components/SearchInput';
import Hightlight from '../../components/Highlight';
import NewsCards from '../../components/NewsCards';
import { NewsListType } from '../../types';

function NewsList() {
  const { newsIbge } = useContext(AppContext);
  const [renderedList, setRenderedList] = useState<NewsListType | undefined>(undefined);

  useEffect(() => {
    setRenderedList(newsIbge);
  }, [newsIbge]);

  const handleSearch = (filteredNews: NewsListType) => {
    setRenderedList(filteredNews);
  };

  return (
    <main className="news-list-main">
      {renderedList && newsIbge.length > 0 ? (
        <div>
          <Hightlight highlight={ newsIbge[0] } />
          <SearchInput list={ newsIbge } onSearch={ handleSearch } />
          {renderedList.length > 0 ? (
            <NewsCards newsList={ renderedList } />
          ) : <p className="no-news-found">Nenhuma notícia encontrada</p>}
        </div>
      ) : <p className="loading">Loading</p>}
    </main>
  );
}

export default NewsList;
