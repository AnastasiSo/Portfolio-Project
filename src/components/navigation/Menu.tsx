import resumePDF from "@public/assets/AnastasiiaSorinaFrontEndDeveloperCV.pdf";
import { FunctionComponent } from "react";
import { NavLink } from "react-router-dom";

// TODO: Find a solution for the behavior of contacts buttons when the checkout page is active.

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

      <li className="menu-items home-page">
        <a href="/#projects" className="menu-link">
          <span>Projects</span>
        </a>
      </li>

      <li className="menu-items">
        <a href="/#contacts" className="menu-link">
          <span>Contacts</span>
        </a>
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
};

export default Menu;
