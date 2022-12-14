import "../_styles/index.scss";

import { FunctionComponent } from "react";
import Column from "./layout/Column";
import Container from "./layout/Container";
import Row from "./layout/Row";

const Menu: FunctionComponent = () => {
  const menuItems = ["About", "Projects", "Contacts", "Resume"];

  return (
    <Container>
      <Row>
        <Column size={6}>
          <div className="logo"></div>
        </Column>
        <Column size={6}>
          <ul className="menu">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`menu-items ${
                  index === menuItems.length - 1 ? "resume" : ""
                }`}
              >
                <a>
                  <span>{item}</span>
                </a>
              </li>
            ))}
          </ul>
        </Column>
      </Row>
    </Container>
  );
};

export default Menu;
