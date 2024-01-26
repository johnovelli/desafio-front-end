import { useState, useContext, useEffect } from 'react';
import AppContext from '../../context/AppContext';
import { newsDate } from '../functions/newsDate';
import { NewsListType, NewsType } from '../../types';
import favorited from '../../assets/favorited.png';
import desfavorited from '../../assets/desfavorited.png';
import './newscards.css';

type NewsCardsType = {
  newsList: NewsListType;
};

function NewsCards({ newsList } : NewsCardsType) {
  const { favoriteList, setFavoriteList } = useContext(AppContext);
  const [sliceValue, setSliceValue] = useState<number>(9);

  const handleShowMore = () => setSliceValue((prev) => prev + 9);
  const handleShowLess = () => setSliceValue((prev) => Math.max(9, prev - 9));

  function handleFavorite(currentNews: NewsType) {
    const isAlreadyFavorited = favoriteList.some((fav: any) => fav.id === currentNews.id);
    setFavoriteList((prev) => (isAlreadyFavorited
      ? prev.filter((fav) => fav.id !== currentNews.id)
      : [...prev, currentNews]));
  }

  useEffect(() => {
    const favoriteStorageJSON = JSON.stringify(favoriteList);
    localStorage.setItem('favoriteList', favoriteStorageJSON);
  }, [favoriteList]);

  function isNewsFavorited(news: NewsType) {
    return favoriteList.some((fav) => fav.id === news.id);
  }

  return (
    <section className="newsCards">
      {newsList.slice(0, sliceValue).map((news, index) => (
        <article className="news" key={ index }>
          <h4>{news.titulo}</h4>
          <p className="newsIntro">{news.introducao}</p>
          <div>
            <div className="newsIntroBot">
              {newsDate(news.data_publicacao) === 1
                ? (<p>{`${newsDate(news.data_publicacao)} dia atras`}</p>)
                : (<p>{`${newsDate(news.data_publicacao)} dias atras`}</p>)}
              <button className="leia-btn">
                Leia a notícia aqui
              </button>
            </div>
            <div className="favorite">
              <button onClick={ () => handleFavorite(news) }>
                {isNewsFavorited(news) ? (
                  <img src={ favorited } alt="favorited" />
                ) : (
                  <img src={ desfavorited } alt="desfavorited" />
                )}
              </button>
            </div>
          </div>
        </article>
      ))}
      <div className="showMore">
        {newsList.length >= 9 && sliceValue < newsList.length && (
          <button className="leia-btn" onClick={ handleShowMore }>
            MAIS NOTÍCIAS
          </button>
        )}
        {sliceValue > 9 && (
          <button className="leia-btn" onClick={ handleShowLess }>
            MENOS NOTÍCIAS
          </button>
        )}
      </div>
    </section>
  );
}

export default NewsCards;
