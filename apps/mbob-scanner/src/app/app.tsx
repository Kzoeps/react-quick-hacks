import './app.module.scss';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Login } from './routes';
import Shell from './shell/shell';


export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shell/>}>
            <Route path="login" element={<Login/>}/>
            <Route path="" element={<Login/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
