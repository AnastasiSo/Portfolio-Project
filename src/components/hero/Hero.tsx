import { FunctionComponent } from "react";
// import imageToAdd from "../assets/header.png";
import Column from "../layout/Column";
import Container from "../layout/Container";
import Row from "../layout/Row";
import SkillsGroup from "./SkillsGroup";

const Hero: FunctionComponent = () => {
  const softSkills = ["hi"];
  const hardSkills = ["bay"];
  const header = require("../assets/header.png");
  return (
    <Container>
      <Row>
        <Column size={3}>
          <SkillsGroup title="Soft " skills={softSkills} />
        </Column>
        <Column size={6} center>
          <img src={header.default} />
          <span>Foto</span>
        </Column>
        <Column size={3}>
          <SkillsGroup title="<Hard /> " skills={hardSkills} />
        </Column>
      </Row>
    </Container>
  );
};

export default Hero;
