import type { ReactNode } from "react";
interface Props {
  children: ReactNode;
  justtfyContent: "left" | "around";
}
const ProfileCard = ({ children, justtfyContent }: Props) => {
  return (
    <div className={`profile-card profile-card-${justtfyContent}`}>
      {children}
    </div>
  );
};

export default ProfileCard;
