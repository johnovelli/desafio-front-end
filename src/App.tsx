import { Route, Routes } from 'react-router-dom';
import { AppProvider } from './context/AppProvider';
import Main from './pages/Main';
import News from './pages/News';
import NewsList from './pages/NewsList';
import ReleaseList from './pages/ReleaseList';
import Favorites from './pages/Favorites';

function App() {
  return (
    <AppProvider>
      <Routes>
        <Route path="/desafio-front-end/" element={ <Main /> }>
          <Route path="/desafio-front-end/" element={ <News /> } />
          <Route path="/desafio-front-end/noticia" element={ <NewsList /> } />
          <Route path="/desafio-front-end/release" element={ <ReleaseList /> } />
          <Route path="/desafio-front-end/favoritos" element={ <Favorites /> } />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
