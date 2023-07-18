import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Videos } from './views/videos.jsx';
import { Donar } from './views/donar.jsx';
import { Proyectos } from './views/proyectos.jsx';
import { Noticias } from './views/noticias.jsx';
import AppIngles from "./views/inicioingles.jsx"
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path ="/videos" element={<Videos/>}/>
        <Route path ="/donar" element={<Donar/>}/>
        <Route path ="/noticias" element={<Noticias/>}/>
        <Route path ="/proyectos" element={<Proyectos/>}/>
        <Route path ="/home" element={<AppIngles/>}/>
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
