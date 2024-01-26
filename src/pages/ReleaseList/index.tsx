import { useState, useEffect, useContext } from 'react';
import SearchInput from '../../components/SearchInput';
import AppContext from '../../context/AppContext';
import Hightlight from '../../components/Highlight';
import NewsCards from '../../components/NewsCards';
import { NewsListType } from '../../types';

function ReleaseList() {
  const { releasesIbge } = useContext(AppContext);
  const [renderedList, setRenderedList] = useState<NewsListType | undefined>(undefined);

  useEffect(() => {
    setRenderedList(releasesIbge);
    console.log(releasesIbge);
  }, [releasesIbge]);

  const handleSearch = (filteredNews: NewsListType) => {
    setRenderedList(filteredNews);
  };

  return (
    <main className="release-list-main">
      {renderedList && releasesIbge.length > 0 ? (
        <div>
          <Hightlight highlight={ releasesIbge[0] } />
          <SearchInput list={ releasesIbge } onSearch={ handleSearch } />
          {renderedList.length > 0 ? (
            <NewsCards newsList={ renderedList } />
          ) : <p className="no-news-found">Nenhuma notícia encontrada</p>}
        </div>
      ) : <p className="loading">Loading</p>}
    </main>
  );
}

export default ReleaseList;
