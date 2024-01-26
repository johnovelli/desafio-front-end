import { createContext } from 'react';
import { NewsListType } from '../types';

type AppContextType = {
  ibgeNews: NewsListType | undefined,
  setIbgeNews: React.Dispatch<React.SetStateAction<NewsListType | undefined>>,
  newsIbge: NewsListType | [],
  releasesIbge: NewsListType | [],
  favoriteList: NewsListType | [],
  setFavoriteList: React.Dispatch<React.SetStateAction<NewsListType | []>>,
};

const AppContext = createContext({} as AppContextType);

export default AppContext;
