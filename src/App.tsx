import Footer from "@components/footer/Footer";
import Navigation from "@components/navigation/Navigation";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "../src/_styles/index.scss";
import AboutMe from "./pages/AboutMe";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        {/* TODO: create NoMatchPage component */}
        <Route path="*" element={<div>404 </div>} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
