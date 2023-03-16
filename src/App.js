import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';


import Games from './pages/Games';
import PairsSelect from './pages/PairsSelect';
import VocalSelect from './pages/VocalSelect';
import PlayMemoryGame from './pages/PlayMemoryGame';

function App() {
  return (
    <div className="app-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Games />} />
          <Route path="/pairs-select" element={<PairsSelect />} />
          <Route path="/vocal-select" element={<VocalSelect />} />
          <Route path="/play-memory-game" element={<PlayMemoryGame />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
