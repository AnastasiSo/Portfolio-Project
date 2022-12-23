import { FunctionComponent, ReactNode } from "react";

const validateSize = (size: number, name: string): boolean => {
  const realSize = Math.trunc(size);
  if (realSize > 12 || realSize < 1) {
    throw new Error(`Invalid prop: '${name}'!`);
  }

  return true;
};

interface IColumnProps {
  size?: number; // Between 1 & 12
  sizeSM?: number; // Between 1 & 12 (>576px)
  sizeMD?: number; // Between 1 & 12 (>768px)
  sizeLG?: number; // Between 1 & 12 (>1200px)

  center?: boolean; // Should this column be centered in the parent row?
  className?: string;

  children?: ReactNode | undefined;
}

// Column Component
const Column: FunctionComponent<IColumnProps> = ({
  size,
  sizeSM,
  sizeMD,
  sizeLG,
  center,
  children,
  className,
}) => {
  let modifiersClassName = "";

  if (center) {
    modifiersClassName += "center";
  }

  if (size) {
    const realSize = Math.trunc(size);
    if (validateSize(realSize, "size")) {
      modifiersClassName += ` column-${realSize}`;
    }
  }

  if (sizeSM) {
    const realSizeSM = Math.trunc(sizeSM);
    if (validateSize(realSizeSM, "sizeSM")) {
      modifiersClassName += ` column-sm-${realSizeSM}`;
    }
  }

  if (sizeMD) {
    const realSizeMD = Math.trunc(sizeMD);
    if (validateSize(realSizeMD, "sizeMD")) {
      modifiersClassName += ` column-md-${realSizeMD}`;
    }
  }

  if (sizeLG) {
    const realSizeLG = Math.trunc(sizeLG);
    if (validateSize(realSizeLG, "sizeLG")) {
      modifiersClassName += ` column-lg-${realSizeLG}`;
    }
  }
  return (
    <div
      className={` column ${modifiersClassName} ${className ? className : ""}`}
    >
      {children}
    </div>
  );
};

Column.defaultProps = {
  size: 12,
  center: false,
};

export default Column;
