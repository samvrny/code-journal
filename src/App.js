import React, { useState } from "react";
import Home from "./components/Home";
import Header from './components/Header';
import Entries from "./components/Entries";
import Contact from "./components/Contact";

function App() {

  const [selectedPage, setSelectedPage] = useState('Home')

  return (
    <div>
      <Header
        selectedPage = { selectedPage }
        setSelectedPage = { setSelectedPage }
      ></Header>
      <main>
        {selectedPage === 'Home' ? (
          <Home></Home>
        ) : selectedPage === 'Entries' ? (
          <Entries></Entries>
        ) : (
          <Contact></Contact>
        )}
      </main>
    </div>
  );
}

export default App;
