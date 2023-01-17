import "../_styles/index.scss";

import { FunctionComponent } from "react";
import Column from "./layout/Column";
import Container from "./layout/Container";
import Row from "./layout/Row";

// TODO: rename file to Navigation
// TODO: 1.menu media query Sm, Md, Lg
// TODO: 2.mobile menu functional

const Menu: FunctionComponent = () => {
  const menuItems = ["About", "Projects", "Contacts", "Resume"];

  return (
    <Container>
      <Row>
        <Column size={6} sizeSM={2} sizeLG={5}>
          <a className="logo" href="#">
            <img src="../img/logo.png" className="icon-logo" />
          </a>
        </Column>
        <Column size={6} sizeSM={10} sizeLG={7}>
          <div className="mobile-menu">
            <span className="mobile-menu-button">MENU</span>
            {/* <span className="close-button">close</span>  TODO: create 'close-button' component? */}
          </div>
          <nav className="top-menu">
            <ul className="menu">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`menu-items ${
                    index === menuItems.length - 1 ? "resume" : ""
                  }`}
                >
                  <a href="#" className="menu-link">
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Column>
      </Row>
    </Container>
  );
};

export default Menu;
