import { Icon } from "@components/Icon";
import { FunctionComponent } from "react";

type Position = "row" | "column";
type DisplayMode = "icon" | "text";

export interface ISocialMediaProps {
  position?: Position;
  mode?: DisplayMode;
}

const SocialMedia: FunctionComponent<ISocialMediaProps> = ({
  position,
  mode,
}) => {
  return (
    <ul
      className={`social-media ${position === "row" ? "position-row" : ""}
      ${mode === "text" ? "mode-text" : ""}`}
    >
      <li>
        <a
          href="https://www.linkedin.com/in/anastasiia-sorina-b9681686"
          target="_blank"
        >
          {mode === "icon" ? <Icon type="linkedIn" /> : <span>LINKEDIN</span>}
        </a>
      </li>
      <li>
        <a href="https://github.com/AnastasiiaSorina" target="_blank">
          {mode === "icon" ? <Icon type="gitHub" /> : <span>GITHUB</span>}
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/anastasaiia.sorina" target="_blank">
          {mode === "icon" ? <Icon type="instagram" /> : <span>INSTAGRAM</span>}
        </a>
      </li>
    </ul>
  );
};

SocialMedia.defaultProps = {
  position: "column",
  mode: "icon",
};
export default SocialMedia;
