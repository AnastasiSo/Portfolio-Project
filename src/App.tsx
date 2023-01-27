import Navigation from "@components/Navigation";
import { Fragment } from "react";
import "../src/_styles/index.scss";
import CircularButton from "./components/CircularButton";

const App = () => {
  return (
    <Fragment>
      <Navigation />
      <CircularButton />
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
