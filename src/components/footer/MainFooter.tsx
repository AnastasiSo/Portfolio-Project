import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import SocialMedia from "@components/navigation/SocialMedia";
import { FunctionComponent } from "react";

const MainFooter: FunctionComponent = () => {
  return (
    <Container className="footer footer::before">
      <Row>
        <Column size={12} sizeMD={6} sizeSM={6}>
          <p>
            Built by
            <a href="https://www.linkedin.com/in/anastasiia-sorina-b9681686/">
              {" "}
              Anastasiia S
            </a>
            . Design by
            <a href="https://www.linkedin.com/in/amiakshylo/"> Anastasiia M</a>
            .
            <br />
            See the code of this website on
            <a href="https://github.com/AnastasiSo/Portfolio-Project">
              {" "}
              Git Hub
            </a>
            .
          </p>
        </Column>
        <Column sizeSM={6} sizeMD={6}>
          <SocialMedia position="row" mode="text" />
        </Column>
      </Row>
    </Container>
  );
};
export default MainFooter;
