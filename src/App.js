import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import Header from './components/Header';
import Entries from "./components/Entries";
import Contact from "./components/Contact";
import Javascript from "./pages/Javascript/Javascript";
import Html from './pages/Html/Html';
import Css from './pages/Css/Css';
import Algorithms from './pages/Algorithms/Algorithms';
import Apis from './pages/Apis/Apis';
import Misc from './pages/Misc/Misc';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <main>
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
