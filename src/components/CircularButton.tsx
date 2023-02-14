import { Icon } from "@components/Icon";
import { FunctionComponent } from "react";

type Direction = "left" | "top" | "right";
export interface ICircularButtonProps {
  direction?: Direction;
  size?: number;
  className?: string;
  handlerOnClick?: () => void;
}
const CircularButton: FunctionComponent<ICircularButtonProps> = (props) => {
  return (
    <button className="circular-button" onClick={props.handlerOnClick}>
      <Icon
        type="arrow"
        boxSize={"0 0 28 28"}
        size={28}
        className={`icon ${props.direction === "top" ? "direction-top" : ""} ${
          props.direction === "left" ? "direction-left" : ""
        } ${props.className}`}
      />
    </button>
  );
};

CircularButton.defaultProps = {
  direction: "right",
};
export default CircularButton;
