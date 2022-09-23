import { FunctionComponent, ReactNode } from "react";

interface IRowProps {
  className?: string;

  children?: ReactNode | Array<ReactNode>;
}
// Row Component
const Row: FunctionComponent<IRowProps> = ({ children, className }) => {
  return <div className={`row ${className ? className : ""}`}>{children}</div>;
};
export default Row;
