import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import 'bootstrap/js/src/collapse.js';
import './bootstrap.min.css';
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' className='py-3' element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
