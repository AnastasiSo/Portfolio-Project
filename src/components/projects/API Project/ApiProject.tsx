import Container from "@components/layout/Container";
import SearchField from "@components/projects/API Project/SearchField";
import { FunctionComponent } from "react";
//TODO: rename rest api to gallery api
const APIProject: FunctionComponent = () => {
  return (
    <Container className="api-gallery-project">
      <div className="api-description">
        <h3>API Project</h3>
        <p>
          This project demonstrates API experience. Enter the code word in
          English in the input form. And enjoy the pictures. <br />
          See code on GitHub or view project on CodePen.
        </p>
      </div>
      <div className="api-project">
        <SearchField />
        <p className="project-technologies">
          <span>React</span>
          <span>Axios</span>
          <span>Unsplash API</span>
        </p>
      </div>
    </Container>
  );
};
export default APIProject;
