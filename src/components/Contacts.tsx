import CircularButton from "@components/CircularButton";
import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import SocialMedia from "@components/SocialMedia";
import { FunctionComponent } from "react";

// TODO: made interface for Contacts (with header?: string ) .. reuse for about me page.

const Contacts: FunctionComponent = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Container>
      <Row className="contacts">
        <Column size={12} sizeSM={8}>
          <div className="contacts-wrap">
            <h2 id="contacts">Contacts</h2>
            <p className="contacts-description">
              I am currently looking for new opportunities, my inbox is always
              open. Whether you have a question or offers! Let's stay in touch
              via email or LinkedIn.
            </p>
            <p className="contacts-title">E-MAIL</p>
            <p className="contacts-mail">anastasiiasorina@gmail.com</p>
          </div>
          <SocialMedia position="row" className={"color"} />
        </Column>
        <Column size={12} sizeSM={4}>
          <div className="back-top-button">
            <CircularButton
              direction="top"
              handlerOnClick={handleScrollToTop}
            />
            <p>BACK TO TOP</p>
          </div>
        </Column>
      </Row>
    </Container>
  );
};
export default Contacts;
