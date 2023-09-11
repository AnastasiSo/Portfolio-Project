import Container from "@components/layout/Container";
import Slider from "@components/slider/Slider";
import { Fragment, FunctionComponent } from "react";

const Projects: FunctionComponent = () => {
  return (
    <Fragment>
      <Container className="projects projects::before">
        <h2 id="projects">Projects</h2>
        <Slider />
      </Container>
    </Fragment>
  );
};
export default Projects;
