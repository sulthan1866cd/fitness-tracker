import type { ReactNode } from "react";
import "./ActivityCard.css";
interface Props {
  children: ReactNode;
  color: "green" | "blue" | "yellow" | "red" | "transperentGreen";
  size: 25 | 50;
}
const ActivityCard = ({ children, color, size }: Props) => {
  return (
    <div
      className={`activity-card activity-card-${color} activity-card-${size}`}
    >
      {children}
    </div>
  );
};

export default ActivityCard;
