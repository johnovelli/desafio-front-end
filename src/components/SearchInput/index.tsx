import { useState, useEffect } from 'react';
import { NewsListType } from '../../types';
import './searchinput.css';

type SearchInputType = {
  list: NewsListType | undefined;
  onSearch: (filteredNews: NewsListType) => void;
};

function SearchInput({ list, onSearch }: SearchInputType) {
  const [inputText, setInputText] = useState<string>('');

  useEffect(() => {
    if (list !== undefined) {
      const newList = list.filter((news) => (
        news.titulo.toLowerCase().includes(inputText.toLowerCase())
      ));
      onSearch(newList);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputText]);

  return (
    <section className="search-input-section">
      <label htmlFor="search-input" className="search-input-label">
        Pesquisa por titulo:
      </label>
      <input
        id="search-input"
        name="search-input"
        type="text"
        value={ inputText }
        onChange={ (text) => setInputText(text.target.value) }
      />
    </section>
  );
}

export default SearchInput;
