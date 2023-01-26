import "../_styles/index.scss";

import SocialMedia from "@components/SocialMedia";
import { FunctionComponent } from "react";
import Column from "./layout/Column";
import Container from "./layout/Container";
import Row from "./layout/Row";

const Hero: FunctionComponent = () => {
  return (
    <Container className="hero">
      <Row>
        <Column size={5}>
          <div className="site-description">
            <p>
              Hi, I'm Anastasiia. I'm Frontend Developer. I use JavaScript and
              React technologies. I looking for new opportunities for remote
              work. Open for participation in interesting projects.
            </p>
          </div>
          <h1>
            Anastasiia
            <br />
            Sorina
          </h1>
          <SocialMedia />
        </Column>
        <Column size={7}>
          <div className="avatar">
            <img src={require("@public/assets/avatar.png").default}></img>
          </div>
        </Column>
      </Row>
      <div></div>
    </Container>
  );
};
export default Hero;
