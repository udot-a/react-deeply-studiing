import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import './index.scss';
import AboutPage from './pages/AboutPage/AboutPage';
import MainPage from './pages/MainPage/MainPage';

export const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>
        Go to the main page
      </Link>
      <Link to={'/about'}>
        Go to the about page
      </Link>
      <Routes>
        <Route path={'/about'} element={<AboutPage />}/>
        <Route path={'/'} element={<MainPage />}/>
      </Routes>
    </div>
  );
};
