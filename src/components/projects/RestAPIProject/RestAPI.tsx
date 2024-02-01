import Container from "@components/layout/Container";
import { FunctionComponent, createContext, useState } from "react";
import useAxios from "../../../hooks/useAxios";
import ImagesGallery from "./ImagesGallery";
import SearchField from "./SearchField";

// Create context
export const ImageContext = createContext();

const RestAPI: FunctionComponent = () => {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=cats&client_id=${process.env.REACT_APP_ACCESS_KEY}`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };

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
        <ImageContext.Provider value={value}>
          <SearchField />
          <ImagesGallery />
        </ImageContext.Provider>
        {/* <Row className="rest-api-gallery">
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
        </Row> */}
        <p className="project-technologies">
          <span>HTML & CSS</span>
          <span>Java Script</span>
        </p>
      </div>
    </Container>
  );
};
export default RestAPI;
