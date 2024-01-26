import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../context/AppProvider';
import Favorites from '../pages/Favorites';

it('Testando renderização da página Favorites', async () => {
  render(
    <Router>
      <AppProvider>
        <Favorites />
      </AppProvider>
    </Router>,
  );
});
