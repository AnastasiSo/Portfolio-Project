import resumePDF from "@public/assets/AnastasiiaSorinaFrontEndDeveloperCV.pdf";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Menu: FunctionComponent = () => (
  <nav className="menu">
    <ul className="menu-wrap">
      <li className="menu-items">
        <NavLink to="/" className="menu-link">
          <span>Home</span>
        </NavLink>
      </li>

      <li className="menu-items">
        <NavLink to="/about" className="menu-link">
          <span>About</span>
        </NavLink>
      </li>

      <li className="menu-items">
        <NavHashLink smooth to="/#projects" className="menu-link">
          Projects
        </NavHashLink>
      </li>

      <li className="menu-items">
        <NavHashLink smooth to="/#contacts" className="menu-link">
          Contacts
        </NavHashLink>
      </li>

      <li className="menu-items">
        <a
          href={resumePDF}
          download="AnastasiiaSorinaFrontEndDeveloperCV.pdf"
          className="menu-link resume"
        >
          <span>Resume</span>
        </a>
      </li>
    </ul>
  </nav>
);

export default Menu;
