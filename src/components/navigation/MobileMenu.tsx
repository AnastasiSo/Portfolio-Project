import Column from "@components/layout/Column";
import Row from "@components/layout/Row";
import SocialMedia from "@components/navigation/SocialMedia";
import { Fragment, FunctionComponent, useState } from "react";
import Logo from "../icon/Logo";
import Menu from "./Menu";

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
              <Logo />
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
          <SocialMedia />
        </div>
      )}
    </Fragment>
  );
};

export default MobileMenu;
