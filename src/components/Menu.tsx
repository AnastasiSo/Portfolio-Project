import { FunctionComponent } from "react";

const Menu: FunctionComponent = () => {
  const menuItems = ["Projects", "Contacts", "Resume"];

  return (
    <nav className="menu">
      <ul className="menu-wrap">
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
  );
};

export default Menu;
