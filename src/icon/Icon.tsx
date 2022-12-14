import { FunctionComponent } from "react";
import ICON_TYPES from "./constants";

type IconType = keyof typeof ICON_TYPES;

interface IIconProps {
  title?: string;

  size?: number;
  type: IconType;

  className?: string;
  color?: string;

  onClick?: () => void;
}

const Icon: FunctionComponent<IIconProps> = ({
  title,
  size,
  type,
  color,
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
      className="icon"
      title={title}
      data-type={type}
      onClick={handleOnClick}
      style={color ? { color } : {}}
    >
      <svg viewBox="0 0 18 18" width={size} height={size}>
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
};

export { Icon, IIconProps, IconType };
