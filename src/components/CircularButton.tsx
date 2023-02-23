import { Icon } from "@components/Icon";
import { FunctionComponent } from "react";

type Direction = "left" | "top" | "right";
export interface ICircularButtonProps {
  direction?: Direction;
  size?: number;
  className?: string;
  handlerOnClick?: (newVal?) => void;
}
const CircularButton: FunctionComponent<ICircularButtonProps> = ({
  direction,
  size,
  className,
  handlerOnClick,
}) => {
  return (
    <button
      className="circular-button"
      onClick={(newVal) => handlerOnClick(newVal)}
    >
      <Icon
        type="arrow"
        boxSize={"0 0 28 28"}
        size={28}
        className={`icon ${direction === "top" ? "direction-top" : ""} ${
          direction === "left" ? "direction-left" : ""
        } ${className}`}
      />
    </button>
  );
};

CircularButton.defaultProps = {
  direction: "right",
};
export default CircularButton;
