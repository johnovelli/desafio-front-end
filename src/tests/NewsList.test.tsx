import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../context/AppProvider';
import NewsList from '../pages/NewsList';

it('Testando renderização da página NewsList', async () => {
  render(
    <Router>
      <AppProvider>
        <NewsList />
      </AppProvider>
    </Router>,
  );
});
