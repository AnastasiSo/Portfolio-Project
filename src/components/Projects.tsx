import Container from "@components/layout/Container";
import Slider from "@components/Slider";
import { FunctionComponent } from "react";

const Projects: FunctionComponent = () => {
  return (
    <Container className="projects">
      <h2>Projects</h2>
      <Slider />
    </Container>
  );
};
export default Projects;
