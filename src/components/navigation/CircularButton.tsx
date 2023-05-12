import { Icon } from "@components/icon/Icon";
import { FunctionComponent } from "react";

type Direction = "left" | "top" | "right";
export interface ICircularButtonProps {
  direction?: Direction;
  className?: string;
  handlerOnClick?: (newVal?) => void;
}
const CircularButton: FunctionComponent<ICircularButtonProps> = ({
  direction,
  className,
  handlerOnClick,
}) => {
  return (
    <button
      className={`circular-button ${className != null ? className : ""}`}
      onClick={(newVal) => handlerOnClick(newVal)}
    >
      <Icon
        type="arrow"
        boxSize={"0 0 28 28"}
        size={28}
        className={`${direction === "top" ? "direction-top" : ""} ${
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
