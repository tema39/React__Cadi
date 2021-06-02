import React from "react";
import "./styles/global.scss";
import "./styles/variables.scss";
import Header from "./components/header";
import Banner from "./components/banner";
import SectionAbout from "./components/sections/about";
import SectionSkills from "./components/sections/skills";
import SectionPortfolio from "./components/sections/Portfolio/portfolio";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SectionAbout />
      <SectionSkills />
      <SectionPortfolio />
      <Footer />
    </div>
  );
}

export default App;
