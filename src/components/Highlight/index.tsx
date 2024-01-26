/* eslint-disable react/jsx-max-depth */
import { newsDate } from '../functions/newsDate';
import { NewsType } from '../../types';
import './highlight.css';

type HightlightType = {
  highlight: NewsType;
};

function Hightlight({ highlight } : HightlightType) {
  const imagens = JSON.parse(highlight.imagens);
  const image = `https://agenciadenoticias.ibge.gov.br/${imagens.image_fulltext}`;

  return (
    <article className="highlight">
      <div className="highlightImg">
        <img src={ image } alt={ `Imagem da notícia: ${highlight.titulo}` } />
      </div>
      <div className="highlightNewsDiv">
        <div className="highlightNews">
          <p className="highlightTitle">Notícia mais recente</p>
          <h2>{highlight.titulo}</h2>
          <p className="highlightIntro">{highlight.introducao}</p>
          <div className="hightlightIntroBot">
            {newsDate(highlight.data_publicacao) === 1
              ? (<p>{`${newsDate(highlight.data_publicacao)} dia atras`}</p>)
              : (<p>{`${newsDate(highlight.data_publicacao)} dias atras`}</p>)}
            <button data-testid="leia-a-notcia" className="leia-btn">
              <a href={ highlight.link } target="_blank" rel="noreferrer">
                Leia a notícia aqui
              </a>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Hightlight;
