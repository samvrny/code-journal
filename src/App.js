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
      <Header
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      ></Header>
      <main>
        {selectedPage === 'Home' ? (
          <Home></Home>
        ) : selectedPage === 'Entries' ? (
          <Entries></Entries>
        ) : (
          <Contact></Contact>
        )}
        <BrowserRouter>
          <Routes>
            {/* This is where the pages routes will go. Each will have it's own route that looks something like this: */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* These will all be tied in with 'Link' Elements in not only the entries, but specific pages */}
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
