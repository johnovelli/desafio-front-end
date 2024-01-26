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
        <Route path="/" element={ <Main /> }>
          <Route path="/" element={ <News /> } />
          <Route path="/noticia" element={ <NewsList /> } />
          <Route path="/release" element={ <ReleaseList /> } />
          <Route path="/favoritos" element={ <Favorites /> } />
        </Route>
      </Routes>
    </AppProvider>
  );
}

export default App;
