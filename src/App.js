import React from "react";
import AboutPage from "./pages/aboutpage";
import ServicePage from "./pages/servicepage";
import FaqPage from "./pages/faqpage";
import GlobalStyle from "./components/GlobalStyled";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AboutPage />
      <ServicePage />
      <FaqPage />
    </>
  );
}

export default App;
