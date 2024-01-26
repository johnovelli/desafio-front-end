import { useState, useEffect } from 'react';
import { getIbgeApi } from '../providers/api';
import AppContext from './AppContext';
import { NewsListType, NewsType } from '../types';

type AppProviderProps = {
  children: React.ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  const [ibgeNews, setIbgeNews] = useState<NewsListType | undefined>(undefined);
  const [newsIbge, setNewsIbge] = useState<NewsListType | []>([]);
  const [releasesIbge, setRealesesIbge] = useState<NewsListType | []>([]);
  const [favoriteList, setFavoriteList] = useState<NewsListType | []>([]);

  useEffect(() => {
    // Carregar a lista de favoritos do localStorage ao inicializar
    const storedFavoriteList = localStorage.getItem('favoriteList');
    if (storedFavoriteList) {
      setFavoriteList(JSON.parse(storedFavoriteList));
    }
  }, []);

  useEffect(() => {
    async function getIbgeNews() {
      const ibge = await getIbgeApi();
      setIbgeNews(ibge.items);
      const news = ibge.items.filter((n: NewsType) => n.tipo === 'Notícia');
      setNewsIbge(news);
      const realeses = ibge.items.filter((n: NewsType) => n.tipo === 'Release');
      setRealesesIbge(realeses);
    }
    getIbgeNews();
  }, []);

  return (
    <AppContext.Provider
      value={ {
        ibgeNews,
        setIbgeNews,
        newsIbge,
        releasesIbge,
        favoriteList,
        setFavoriteList,
      } }
    >
      {children}
    </AppContext.Provider>
  );
}
