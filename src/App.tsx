import MainFooter from "@components/footer/MainFooter";
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
        {/* // TODO: create folder "pages" with components HomePage and AboutMePage. */}
        {/* Use HomePage component for path="/" */}
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        {/* TODO: create NoMatchPage component */}
        <Route path="*" element={<div>404 </div>} />
      </Routes>
      <MainFooter />
    </Fragment>
  );
};

export default App;
