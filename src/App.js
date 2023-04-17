import "./App.css";
import Home from "./components/Navbar/Home";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchMovie from "./components/Navbar/SearchMovies/SearchMovie";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="searchmovie" element={<SearchMovie />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
