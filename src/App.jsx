import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home.jsx";
import About from "./About.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="flex justify-center">
          <Link className="p-3" to="/">
            Home
          </Link>
          <Link className="p-3" to="/about">
            About
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
