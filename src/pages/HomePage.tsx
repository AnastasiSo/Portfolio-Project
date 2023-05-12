import Contacts from "@components/Contacts";
import Hero from "@components/Hero";
import Projects from "@components/projects/Projects";
import { Fragment } from "react";

const HomePage = () => {
  return (
    <Fragment>
      <Hero />
      <Projects />
      <Contacts />
    </Fragment>
  );
};

export default HomePage;