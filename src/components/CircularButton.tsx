import { Icon } from "@components/Icon";
import { FunctionComponent } from "react";

type Direction = "left" | "top" | "right";
export interface ICircularButtonProps {
  direction?: Direction;
  size?: number;
}

const CircularButton: FunctionComponent<ICircularButtonProps> = ({
  direction,
  size,
}) => {
  return (
    <button className="circular-button">
      <Icon
        type="arrow"
        boxSize={"0 0 28 28"}
        size={28}
        className={`icon ${direction === "top" ? "direction-top" : ""}${
          direction === "left" ? "direction-left" : ""
        }`}
      />
    </button>
  );
};

CircularButton.defaultProps = {
  direction: "right",
};
export default CircularButton;
