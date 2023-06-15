import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Layout from './components/Layout';
import Home from './routes/Home';
import Categories from './routes/Categories';
import NotMatch from './routes/NotMatch';
import { getBooks } from './redux/slices/books/bookSlice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

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
