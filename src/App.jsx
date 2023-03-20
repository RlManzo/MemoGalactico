
import './App.css';
import MemoTest from './components/Cards/memo_test';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = ()=>{
 
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<MemoTest/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;





