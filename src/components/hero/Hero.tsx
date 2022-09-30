import { FunctionComponent } from "react";
import Column from "../layout/Column";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Skill from "./Skill";

const Hero: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Column size={3}>
          <Skill />
        </Column>
        <Column size={6} center>
          <span>Foto</span>
        </Column>
        <Column size={3}>
          <Skill />
        </Column>
      </Row>
    </Container>
  );
};

export default Hero;
