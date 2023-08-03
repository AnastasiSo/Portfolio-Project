import MainFooter from "@components/footer/MainFooter";
import Navigation from "@components/navigation/Navigation";
import AboutMe from "@pages/AboutMe";
import HomePage from "@pages/HomePage";
import NoMachPage from "@pages/NoMachPage";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "../src/_styles/index.scss";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<NoMachPage />} />
      </Routes>
      <MainFooter />
    </Fragment>
  );
};

export default App;
