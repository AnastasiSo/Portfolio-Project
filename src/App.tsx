import AboutMe from "@components/AboutMe";
import Contacts from "@components/Contacts";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Navigation from "@components/Navigation";
import Projects from "@components/Projects";
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import "../src/_styles/index.scss";

const App = () => {
  return (
    <Fragment>
      <Routes>
        {/* // TODO: create folder "pages" with components HomePage and AboutMePage. */}
        {/* Use HomePage component for path="/" */}
        <Route
          path="/"
          element={
            <Fragment>
              <Navigation />
              <Hero />
              <Projects />
              <Contacts />
              <Footer />
            </Fragment>
          }
        />
        <Route path="/about" element={<AboutMe />} />
        <Route path="*" element={<div>NoMatch </div>} />
      </Routes>
    </Fragment>
  );
};

{
  /* <Menu />
      <Hero>
        <SocialMedia />
      </Hero>
      <Projects>
        <Slider>
          <Slide />
        </Slider>
      </Projects> 
      <Projects>     
        <Rest />
      </Projects>
      <Contacts />
      <Footer /> */
}
export default App;
