import CircularButton from "@components/CircularButton";
import SocialMedia from "@components/SocialMedia";
import { FunctionComponent } from "react";
import Column from "./layout/Column";
import Container from "./layout/Container";
import Row from "./layout/Row";

const Contacts: FunctionComponent = () => {
  return (
    <Container>
      <Row className="contacts">
        <Column size={8}>
          <h2>Contacts</h2>
          <p className="contacts-description">
            I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question or offers! Let's stay in touch via
            email or LinkedIn.
          </p>
          <p className="contacts-title">E-MAIL</p>
          <p className="contacts-mail">anastasiiasorina@gmail.com</p>
          <SocialMedia position="row" />
        </Column>
        <Column size={4} className="back-top-button">
          <CircularButton direction="top" />
          <p>BACK TO TOP</p>
        </Column>
      </Row>
    </Container>
  );
};
export default Contacts;
