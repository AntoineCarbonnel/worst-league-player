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
            <div id="body" className="container">
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="favorites" element={<Favorites/>}/>
              </Routes>
            </div>
            <Footer/>
          </div>
  )
}

export default App;
