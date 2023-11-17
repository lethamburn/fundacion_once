import './App.css';

import { Outlet } from 'react-router-dom';

import Header from './components/Header/Header';

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
