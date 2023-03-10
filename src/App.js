import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import GameMenu from './components/game-menu.component';
import CardBoard from './components/card-board.component';

function App() {
  return (
    <div className="app-container">
        <CardBoard />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CardBoard />} />
        </Routes>
      </BrowserRouter>
      <GameMenu />
    
    </div>
  );
}

export default App;
