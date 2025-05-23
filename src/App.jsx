import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import PlayerSelection from './components/PlayerSelection/PlayerSelection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player-selection" element={<PlayerSelection />} />
      </Routes>
    </Router>
  );
};

export default App;
