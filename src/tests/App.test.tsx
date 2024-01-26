import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppProvider } from '../context/AppProvider';
import App from '../App';

it('Testando pagina inicial', async () => {
  render(
    <Router>
      <AppProvider>
        <App />
      </AppProvider>
    </Router>,
  );
  await waitFor(() => {
    const textElement = screen.getByText('TRYBE NEWS');
    expect(textElement).toBeInTheDocument();
    const textElement2 = screen.getByText('Pesquisa por titulo:');
    expect(textElement2).toBeInTheDocument();
  });
});
