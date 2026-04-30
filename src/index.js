import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

//componentes
import ProjectList from './components/project/ProjectList';
import ProjectForm from './components/project/ProjectForm';
import NavBar from './components/navBar/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <NavBar/>
    <div className='container my-4'>
      <Routes>
        <Route exact path='/' Component={ProjectList}/>
        <Route path='/projectForm' Component={ProjectForm}/>
      </Routes>
    </div>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
