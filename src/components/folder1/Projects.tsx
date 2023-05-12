import Slider from "@components/folder2/Slider";
import Container from "@components/layout/Container";
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
