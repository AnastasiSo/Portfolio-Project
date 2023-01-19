import "../_styles/index.scss";

import { FunctionComponent } from "react";
import Column from "./layout/Column";
import Container from "./layout/Container";
import Row from "./layout/Row";

// TODO: 1.menu media query Sm, Md, Lg
// TODO: 2.mobile menu functional

const Navigation: FunctionComponent = () => {
  const menuItems = ["About", "Projects", "Contacts", "Resume"];

  return (
    <Container className="navigation">
      <Row>
        <Column size={6} sizeSM={5} sizeMD={5} sizeLG={5} className="logo-wrap">
          <a className="logo" href="#">
            <img src="../img/logo.png" className="icon-logo" />
          </a>
        </Column>
        <Column
          size={6}
          sizeSM={7}
          sizeMD={7}
          sizeLG={7}
          className="mobile-menu-wrap"
        >
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

export default Navigation;
