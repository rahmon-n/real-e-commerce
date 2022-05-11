import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { AboutPage } from './pages/about.component';
import { HomePage } from './pages/homepage/homepage.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
