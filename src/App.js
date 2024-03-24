import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import LoopingList from './latihan/LoopingList'; 
import Props from './latihan/Props'; // 
import MiniOne from './latihan/MiniOneb'; // 
import Routerr from './Routerr';

const App = () => {
  return (
    <Router>
      <div>
        <Routerr /> {/* Komponen navigasi dengan Link */}
        <Routes>
          <Route exact path="/" element={<LoopingList />} /> 
          <Route path="/props" element={<Props />} /> 
          <Route path="/minione" element={<MiniOne />} /> 
        </Routes> 
      </div>
    </Router>
  );
};

export default App;