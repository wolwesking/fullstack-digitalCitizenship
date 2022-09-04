import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Controll from './components/Controll';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/control' element={<Controll />} />
      </Routes>
  </BrowserRouter>
);
