import logo from './logo.svg';
import {useState,useEffect} from 'react';
import './App.css';
import Router from 'react-dom';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import HomeIndex from './comps/homeindex';
import Home from './screens/home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/yenga" element={<HomeIndex/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
      </Routes>
      
    </div>
  );
}


export default App;
