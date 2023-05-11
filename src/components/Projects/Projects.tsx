import Container from "@components/layout/Container";
import Slider from "@components/Slider/Slider";
import { FunctionComponent } from "react";

const Projects: FunctionComponent = () => {
  return (
    <Container className="projects">
      <h2 id="projects">Projects</h2>
      <Slider />
    </Container>
  );
};
export default Projects;
