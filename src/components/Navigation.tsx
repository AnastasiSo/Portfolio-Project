import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import Logo from "@components/Logo";
import Menu from "@components/Menu";
import MobileMenu from "@components/MobileMenu";
import { FunctionComponent } from "react";

const Navigation: FunctionComponent = () => {
  return (
    <Container className="navigation">
      <Row>
        <Column size={6} sizeSM={5} className="logo-wrap">
          <Logo />
        </Column>
        <Column size={6} sizeSM={7} className="nav-menu-wrap">
          <MobileMenu />
          <Menu />
        </Column>
      </Row>
    </Container>
  );
};

export default Navigation;
