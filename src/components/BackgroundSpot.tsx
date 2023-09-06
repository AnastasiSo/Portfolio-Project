import { FunctionComponent } from "react";

// type Direction = "left" | "right";

// export interface IBackgroundSpotProps {
//   direction?: Direction;
//   className?: string;
// }
const BackgroundSpot: FunctionComponent = (
  {
    // const BackgroundSpot: FunctionComponent<IBackgroundSpotProps> = ({
    // direction,
    // className,
  }
) => {
  return (
    <div className="pink-spot-menu">
      {/* //  {`${direction === "left" ? "direction-left" : ""} ${className}`} */}
    </div>
  );
};

// BackgroundSpot.defaultProps = {
//   direction: "right",
// };

export default BackgroundSpot;
