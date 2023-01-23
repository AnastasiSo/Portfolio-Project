import "../_styles/index.scss";
import Column from "./layout/Column";
import Row from "./layout/Row";

import { Fragment, FunctionComponent } from "react";
import Menu from "./Menu";

// TODO: 1.menu media query Sm, Md, Lg
// TODO: 2.mobile menu functional

const MobileMenu: FunctionComponent = () => {
  return (
    <Fragment>
      <button className="mobile-menu-button">MENU</button>
      <div className="mobile-menu">
        <Row>
          <Column size={6} className="logo-wrap">
            <a className="logo" href="#">
              <img src="../img/logo-mobile.png" className="icon-logo" />
            </a>
          </Column>
          <Column size={6}>
            <span className="mobile-menu-close">CLOSE</span>
          </Column>
        </Row>
        <Menu />
        {/* <SocialMedia /> */}
      </div>
    </Fragment>
  );
};

export default MobileMenu;
