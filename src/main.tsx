import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './Todo-App/App' ;
import HomePage from './home-page/App';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<TodoApp/>} />
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)