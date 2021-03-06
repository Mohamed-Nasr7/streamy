import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<StreamList />} />
        <Route path='/streams/new' element={<StreamCreate />} />
        <Route path='/streams/edit' element={<StreamEdit />} />
        <Route path='/streams/delete' element={<StreamDelete />} />
        <Route path='/streams/show' element={<StreamShow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
