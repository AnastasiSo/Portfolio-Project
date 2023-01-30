import { Icon, IIconProps } from "@components/Icon";
import { FunctionComponent } from "react";

type Direction = "left" | "top" | "right";

export interface ICircularButtonProps {
  direction?: Direction;
  size?: IIconProps;
}

const CircularButton: FunctionComponent<ICircularButtonProps> = (props) => {
  return (
    <button className="circular-button">
      <Icon
        type="arrow"
        parameters={"0 0 28 28"}
        size={28}
        className={`"icon" ${
          props.direction === "top" ? "direction-top" + props.direction : ""
        }${
          props.direction === "left" ? "direction-left" + props.direction : ""
        }`}
      />
    </button>
  );
};

CircularButton.defaultProps = {
  direction: "right",
};
export default CircularButton;
