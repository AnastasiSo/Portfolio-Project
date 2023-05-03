import { FunctionComponent } from "react";

const Menu: FunctionComponent = () => {
  const menuItems = [
    { title: "About", href: "#about" },
    { title: "Projects", href: "#projects" },
    { title: "Contacts", href: "#contacts" }, // add id for Contacts component
    {
      title: "Resume",
      href: "../../public/assets/AnastasiiaSorinaFrontEndDeveloper.pdf",
    },
  ];

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
            {index !== menuItems.length - 1 ? (
              <a href={item.href} className="menu-link">
                <span>{item.title}</span>
              </a>
            ) : (
              <a
                href={`${index === menuItems.length - 1 ? "#" : ""}`}
                download={item.href}
                className="menu-link"
              >
                <span>{item.title}</span>
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
