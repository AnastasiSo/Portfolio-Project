import { FunctionComponent } from "react";
import Column from "../layout/Column";
import Container from "../layout/Container";
import Row from "../layout/Row";
import Skill from "./Skill";

const Hero: FunctionComponent = () => {
  return (
    <Container>
      <Row>
        <Column>
          <Skill />
        </Column>
        <Column>
          <span>Foto</span>
        </Column>
        <Column>
          <Skill />
        </Column>
      </Row>
    </Container>
  );
};

export default Hero;
