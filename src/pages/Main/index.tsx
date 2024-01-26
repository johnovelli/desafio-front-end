import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header';
import './main.css';

function Main() {
  return (
    <main>
      <div className="main-container">
        <Header />
        <section className="main-content">
          <Outlet />
        </section>
      </div>
    </main>
  );
}

export default Main;
