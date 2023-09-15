import Container from "@components/layout/Container";
import { FunctionComponent } from "react";
import Column from "../layout/Column";
import Row from "../layout/Row";

const RestAPI: FunctionComponent = () => {
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
        <form>
          <input placeholder="You can start with the word: cat."></input>
          <button>
            <span>SEARCH</span>
          </button>
        </form>
        <Row className="rest-api-gallery">
          <Column size={12} sizeSM={6}>
            <div className="green first-picture"></div>
          </Column>
          <Column size={6} sizeSM={3}>
            <div className="rectangle">
              <div className=" pink second-picture gallery-item rectangle-item"></div>
            </div>
            <div className="square">
              <div className="pink third-picture gallery-item square-item"></div>
            </div>
          </Column>
          <Column size={6} sizeSM={3}>
            <div className="square">
              <div className="pink fourth-picture gallery-item square-item"></div>
            </div>
            <div className="rectangle">
              <div className="blue fifth-picture gallery-item rectangle-item"></div>
            </div>
          </Column>
        </Row>
        <p className="project-technologies">
          <span>HTML & CSS</span>
          <span>Java Script</span>
        </p>
      </div>
    </Container>
  );
};
export default RestAPI;
