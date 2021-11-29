import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Cities from "./Pages/Cities"
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//Perdon a quien corrija esto, lo hice 
//con poco tiempo, en pantalla completa esta bien, lamentablemente el reponsive no llego

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="Cities" element={<Cities />} />
    </Routes>
    
  </BrowserRouter>,
  document.getElementById('root')
);

