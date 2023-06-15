import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';
import Home from './routes/Home';
import Categories from './routes/Categories';
import NotMatch from './routes/NotMatch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
}

export default App;
