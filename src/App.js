import React from "react";
import GlobalStyle from "./components/GlobalStyled";
import Nav from "./components/nav";
import ContactUs from "./pages/ContactPage";
import OurWork from "./pages/OurWorkPage";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";
import MovieDetail from "./pages/MovieDetails";
function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="work" element={<OurWork />} />
        <Route path="work/:id" element={<MovieDetail />} />

        <Route path="contact" element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
