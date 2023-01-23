import "../_styles/index.scss";

import { FunctionComponent } from "react";
import Column from "./layout/Column";
import Container from "./layout/Container";
import Row from "./layout/Row";
import Menu from "./Menu";
import MobileMenu from "./MobileMenu";

// TODO: 1.menu media query Sm, Md, Lg
// TODO: 2.mobile menu functional

const Navigation: FunctionComponent = () => {
  return (
    <Container className="navigation">
      <Row>
        <Column size={6} sizeSM={5} className="logo-wrap">
          <a className="logo" href="#">
            <img src="../img/logo.png" className="icon-logo" />
          </a>
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
