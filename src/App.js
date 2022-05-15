import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import List from "./pages/list/List";
import Home from "./pages/home/home";
import Hotel from "./pages/hotel/Hotel";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/hotels" element={<List />}/>
        <Route path="/hotels/:id" element={<Hotel />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
