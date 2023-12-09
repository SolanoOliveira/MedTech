import React from 'react';
import './App.css'; // Este é o arquivo CSS para estilização adicional
import LoginPage from './pages/login/LoginPage';
import Catalogo from './pages/catalogo/Catalogo';
import Home from './pages/home/Home';
import Video from './pages/video/Video';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/catalogo' element={<Catalogo/>} />
      <Route path='/login' element={<LoginPage/>} />
      <Route path='/video' element={<Video/>} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
