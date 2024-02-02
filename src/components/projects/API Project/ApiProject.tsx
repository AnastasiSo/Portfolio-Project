import Container from "@components/layout/Container";
import { FunctionComponent } from "react";
import SearchField from "./SearchField";

const APIProject: FunctionComponent = () => {
  return (
    <Container className="rest-api">
      <div className="rest-api-description">
        <h3>Rest API Project</h3>
        <p>
          This project demonstrates API experience. Enter the code word in
          English in the input form. And enjoy the pictures. <br />
          See code on GitHub or view project on CodePen.
        </p>
      </div>
      <div className="rest-api-project">
        <SearchField />
        <p className="project-technologies">
          <span>HTML & CSS</span>
          <span>Java Script</span>
        </p>
      </div>
    </Container>
  );
};
export default APIProject;
