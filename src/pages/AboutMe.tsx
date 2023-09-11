import Contacts from "@components/Contacts";
import Container from "@components/layout/Container";
import resumePDF from "@public/assets/AnastasiiaSorinaFrontEndDeveloperCV.pdf";
import { Fragment, FunctionComponent } from "react";
import Facts from "../components/aboutMe/Facts";

export interface IAboutMeProps {
  title?: string;
  href?: string;
}

const AboutMe: FunctionComponent<IAboutMeProps> = () => {
  return (
    <Fragment>
      {/* create component <facts> */}
      <Container className="about-me">
        <h2>About.</h2>
        <Facts />
        <div className="about-me-description">
          <p>
            Hello! I am interested in working remotely as a Frontend Developer.
            I live in England, Keswick.
          </p>

          <img
            className="aboutMe-photo"
            src={require("@public/assets/anastasiiaSorinaPhoto.png").default}
          ></img>

          <h4>EDUCATION</h4>

          <p>
            I have higher education. I completed Markup Developer courses and
            have a successful internship experience at Artland as a Frontend
            Developer with recommendations. In Artland I've worked on
            optimization and standardization code, updated obsolete Graph QL
            queries actively participated in code standardization and
            documentation discussions. Added components and added new properties
            to existing components. Working with API.
          </p>
          <h4>EXPERIENCE</h4>
          <p>
            I have experience running my own business in the beauty industry,
            there were about 5 people in my subordination. Master of sports in
            sports acrobatics. Have teaching experience. Worked as a Coach in a
            children's sports school for 3 years.
          </p>
          <h4>HOBBIES</h4>
          <p>
            For me, new experiences are very important. I enjoy learning new
            skills. I am fond of watercolor painting. I recently started to take
            an interest in rock climbing and walking along mountain paths. I
            like to organize a team to work on different projects.
          </p>
          <h4>LANGUAGES</h4>
          <p className="languages">
            My native language is Ukrainian, I also speak Russian fluently.
            Polish at A1 level. I speak English - at an intermediate level, and
            currently, I continue to study it. I'm used to solving complex
            problems and quickly understanding what is required of me.
          </p>
          <a
            className="abut-me-resume"
            href={resumePDF}
            download={"AnastasiiaSorinaFrontEndDeveloper.pdf"}
          >
            LOAD RESUME
          </a>
          <img
            className="aboutMe-photo-mobile"
            src={require("@public/assets/anastasiiaSorinaPhoto.png").default}
          ></img>
        </div>
      </Container>
      <Contacts />
    </Fragment>
  );
};
export default AboutMe;
