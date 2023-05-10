import SocialMedia from "@components/SocialMedia";
import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import avatar from "@public/assets/avatar.png";
import { FunctionComponent } from "react";

const Hero: FunctionComponent = () => {
  return (
    <Container className="hero">
      <Row>
        <Column size={5}>
          <div className="site-description">
            <p>
              Hi, I'm Anastasiia. I'm Frontend Developer. I use JavaScript and
              React technologies. I'm looking for new opportunities for remote
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
            <img src={avatar}></img>
          </div>
        </Column>
      </Row>
    </Container>
  );
};
export default Hero;
