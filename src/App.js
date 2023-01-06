import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Header from './components/Header';
import Entries from "./components/Entries";
import Contact from "./components/Contact";
import Javascript from "./components/Javascript";
import Html from './components/Html';
import Css from './components/Css';
import Algorithms from './components/Algorithms';
import Apis from './components/Apis';
import Misc from './components/Misc'

function App() {
  return (
    <div className='root-container'>
      <BrowserRouter>
        <main>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/entries' element={<Entries />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/javascript' element={<Javascript />} />
            <Route path='/html' element={<Html />} />
            <Route path='/css' element={<Css />} />
            <Route path='/algorithms' element={<Algorithms />} />
            <Route path='/apis' element={<Apis />} />
            <Route path='/misc' element={<Misc />} />
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
            {/* <Route path='/' element={< />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
