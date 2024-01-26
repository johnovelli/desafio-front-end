import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../context/AppProvider';
import ReleaseList from '../pages/ReleaseList';

it('Testando renderização da página ReleaseList', async () => {
  render(
    <Router>
      <AppProvider>
        <ReleaseList />
      </AppProvider>
    </Router>,
  );
});
