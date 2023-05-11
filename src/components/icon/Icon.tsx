import { FunctionComponent } from "react";
import ICON_TYPES from "./constants";

type IconType = keyof typeof ICON_TYPES;

interface IIconProps {
  title?: string;

  size?: number;
  type: IconType;

  className?: string;
  color?: string;

  boxSize?: string;

  onClick?: () => void;
}

const Icon: FunctionComponent<IIconProps> = ({
  title,
  size,
  type,
  color,
  boxSize,
  className,
  onClick,
}) => {
  if (ICON_TYPES[type] == null) {
    console.error(`[Icon] Invalid icon type: ${type}`);
  }
  const handleOnClick = () => {
    if (typeof onClick === "function") {
      onClick();
    }
  };

  return (
    <div
      className={`icon ${className ? className : ""}`}
      title={title}
      data-type={type}
      onClick={handleOnClick}
      style={color ? { color } : {}}
    >
      <svg viewBox={boxSize} width={size} height={size}>
        {type && ICON_TYPES[type] !== null ? (
          <path d={ICON_TYPES[type]} />
        ) : (
          <path d={ICON_TYPES["logo"]} />
        )}
      </svg>
    </div>
  );
};

Icon.defaultProps = {
  size: 20,
  boxSize: "0 0 20 20",
};

export { Icon, IIconProps, IconType };
