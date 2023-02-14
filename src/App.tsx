import Hero from "@components/Hero";
import Navigation from "@components/Navigation";
import Slider from "@components/Slider";
import { Fragment } from "react";
import "../src/_styles/index.scss";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <Hero />
      <Slider />
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
