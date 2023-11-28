import React from 'react';
import './App.css'; // Este é o arquivo CSS para estilização adicional
import LoginPage from './pages/login/LoginPage';
import Catalogo from './pages/catalogo/Catalogo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/catalogo' element={<Catalogo/>} />
    </Routes>
  </BrowserRouter>
  );
};

export default App;
