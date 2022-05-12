import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { HomePage } from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="shop/*" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;
