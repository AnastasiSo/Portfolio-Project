import Container from "@components/layout/Container";
import SearchField from "@components/projects/api/SearchField";
import { FunctionComponent } from "react";

//TODO: add an actual link to GitHub for API Project
const GalleryWithAPI: FunctionComponent = () => {
  return (
    <Container className="api-gallery">
      <div className="project-description">
        <h3>Gallery with API</h3>
        <p>
          This project demonstrates API experience. Enter the code word in
          English in the input form. And enjoy the pictures. <br />
          See code on
          <a href="https://github.com/AnastasiSo/Portfolio-Project/tree/main/src/components">
            GitHub
          </a>
          .
        </p>
      </div>
      <div className="api-gallery-project">
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
export default GalleryWithAPI;
