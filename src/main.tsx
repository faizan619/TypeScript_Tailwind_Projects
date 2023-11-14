import React from 'react';
import ReactDOM from 'react-dom/client';
import TodoApp from './Todo-App/App' ;
import HomePage from './home-page/App';
import DriverApp from './driverjs/App'
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Toaster} from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Toaster
          position='bottom-center'
        />
    <BrowserRouter>
      <Routes>
        <Route path='/todo' element={<TodoApp/>} />
        <Route path='/' element={<HomePage/>}/> 
        <Route path='/driver' element={<DriverApp/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)