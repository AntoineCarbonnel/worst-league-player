import React from "react";
import {Routes, Route} from "react-router-dom";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"

function App() {

  return (
          <div id="app">
            <Header/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="favorites" element={<Favorites/>}/>
            </Routes>
            <Footer/>
          </div>
  )
}

export default App;
