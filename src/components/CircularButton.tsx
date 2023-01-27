import { Icon, IIconProps } from "@components/Icon";
import { FunctionComponent } from "react";

type Direction = "left" | "top" | "right";

export interface ICircularButtonProps {
  direction?: Direction;
  size?: IIconProps;
}

const CircularButton: FunctionComponent<ICircularButtonProps> = (props) => {
  return (
    <Icon type="arrow" size={20} />
    //     <button
    //       className={`social-media
    //       ${props.direction === "top" && "direction-top"}${
    //         props.direction === "left" && "direction-left"
    //       }`}
    //     >
    //       <li>
    //         <a href="#">
    //
    //         </a>
    //       </li>
    //     </button>
  );
};

CircularButton.defaultProps = {
  direction: "right",
};
export default CircularButton;
