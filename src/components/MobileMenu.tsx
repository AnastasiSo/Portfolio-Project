import { Fragment, FunctionComponent, useState } from "react";
import "../_styles/index.scss";
import Column from "./layout/Column";
import Row from "./layout/Row";
import Menu from "./Menu";

// TODO: 1.menu media query Sm, Md, Lg
// TODO: 2.mobile menu functional

const MobileMenu: FunctionComponent = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handlerOnClickMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };
  return (
    <Fragment>
      <button onClick={handlerOnClickMenu} className="mobile-menu-button">
        MENU
      </button>
      {showMobileMenu && (
        <div className="mobile-menu">
          <Row>
            <Column size={6} className="logo-wrap">
              <a className="logo" href="#">
                <img src="../img/logo-mobile.png" className="icon-logo" />
              </a>
            </Column>
            <Column size={6}>
              <button
                onClick={handlerOnClickMenu}
                className="mobile-menu-close"
              >
                CLOSE
              </button>
            </Column>
          </Row>
          <Menu />
          {/* <SocialMedia /> */}
        </div>
      )}
    </Fragment>
  );
};

export default MobileMenu;
