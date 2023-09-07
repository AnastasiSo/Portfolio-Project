import Logo from "@components/icon/Logo";
import Column from "@components/layout/Column";
import Container from "@components/layout/Container";
import Row from "@components/layout/Row";
import Menu from "@components/navigation/Menu";
import MobileMenu from "@components/navigation/MobileMenu";
import { FunctionComponent } from "react";

const Navigation: FunctionComponent = () => {
  return (
    <Container className="navigation spot-item1 pink">
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
