import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';
import Categories from './components/Categories';
import CardsList from './components/CardsList';
import { Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <NavBar/>
    <SearchBar/>
    <Categories/>
    <CardsList topic="taylor swift"/>
    <Routes>
            <Route path='/Lifestyle' element={ <CardsList topic="Lifestyle"/>}></Route>
            <Route path='/Medical' element={ <CardsList topic="Medical"/>}></Route>
            <Route path='/entertainment'  element={ <CardsList topic="entertainment"/>}></Route>
            <Route path='/Nature'  element={ <CardsList topic="Nature"/>}></Route>
            <Route path='/Retro'  element={ <CardsList topic="Retro"/>}></Route>
            <Route path='/Science'  element={ <CardsList topic="Science"/>}></Route>
            <Route path='/Sport'  element={ <CardsList topic="Sport"/>}></Route>
            <Route path='/technology'  element={ <CardsList topic="technology"/>}></Route>
            <Route path='/Transportation'  element={ <CardsList topic="Transportation"/>}></Route>
    </Routes>

  
  </>

);
reportWebVitals();
