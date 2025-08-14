import type { ReactNode } from "react";
import "./BorderCard.css"
interface Props {
  children: ReactNode;
  size: 25 | 50;
}
const BorderCard = ({ children, size }: Props) => {
  return <div className={`border-card border-card-${size}`}>{children}</div>;
};

export default BorderCard;
