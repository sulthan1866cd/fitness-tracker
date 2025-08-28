import type { ReactNode } from "react";
import "./ActivityCard.css";
interface Props {
  children: ReactNode;
  color: "white" | "green" | "blue" | "yellow" | "red" | "transperentGreen";
  size: 25 | 50;
  border?: boolean;
}
const ActivityCard = ({ children, color, size, border }: Props) => {
  return (
    <div
      className={`activity-card activity-card-${color} activity-card-${size} ${
        border && "activity-card-border"
      }`}
    >
      {children}
    </div>
  );
};

export default ActivityCard;
