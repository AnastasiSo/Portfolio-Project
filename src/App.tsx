
import Contacts from "@components/Contacts";
import Footer from "@components/Footer";
import Hero from "@components/Hero";
import Navigation from "@components/Navigation";
import Projects from "@components/Projects";
import Slider from "@components/Slider";
import { Fragment } from "react";
import "../src/_styles/index.scss";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Projects />
      <Contacts />
      <Footer />
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
