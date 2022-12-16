import React, { useState } from "react";
import Home from "./components/Home";
import Header from './components/Header';
import Entries from "./components/Entries";
import Contact from "./components/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  const [selectedPage, setSelectedPage] = useState('Home')

  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/entries' element={<Entries />} />
            <Route path='/contact' element={<Contact />} />
            {/* <Route path='/' element={< />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
