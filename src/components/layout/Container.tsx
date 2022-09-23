import { FunctionComponent, ReactNode } from "react";

interface IContainerProps {
  className?: string;
  children?: ReactNode | Array<ReactNode>;
}

const Container: FunctionComponent<IContainerProps> = ({
  children,
  className,
}) => {
  return (
    <div className={`container ${className ? className : ""}`}>{children}</div>
  );
};

export default Container;
