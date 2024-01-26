import { render, screen, waitFor, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../context/AppProvider';
import { mockedData } from '../providers/mockedData';
import NewsCards from '../components/NewsCards';

it('Testando o componente NewsCards', async () => {
  render(
    <Router>
      <AppProvider>
        <NewsCards newsList={ mockedData } />
      </AppProvider>
    </Router>,
  );
  await waitFor(() => {
    console.log(screen.debug());
    const elements = screen.getAllByText('Leia a notícia aqui');
    expect(elements.length).toBeGreaterThan(0);
    expect(elements.length).toBe(mockedData.length);
    const firstButton = elements[0];
    expect(firstButton).toBeInTheDocument();
    fireEvent.click(firstButton);
    const notFavoritedImage = screen.getAllByAltText('desfavorited');
    const firstFavorite = notFavoritedImage[0];
    expect(firstFavorite).toBeInTheDocument();
    fireEvent.click(firstFavorite);
  });
});
