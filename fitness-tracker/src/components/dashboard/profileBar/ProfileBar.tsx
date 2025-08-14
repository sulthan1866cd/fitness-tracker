import { useNavigate } from "react-router-dom";
import type { IUser } from "../../../interfaces/user.interface";
import "./ProfileBar.css";
import ProfileCard from "./ProfileCard";
import Pill from "./Pill";
import FormModal from "./formModal/FormModal";
import type { IGoal } from "../../../interfaces/goal.interface";
import { useState } from "react";
import type { ISchedule } from "../../../interfaces/schedule.interface";
import { AccountCircle, FmdGood } from "@mui/icons-material";

interface Props {
  percent: number;
  goal: IGoal;
  setGoal: React.Dispatch<React.SetStateAction<IGoal>>;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  schedules: ISchedule[];
}
const ProfileBar = ({
  percent,
  user,
  setUser,
  goal,
  setGoal,
  schedules,
}: Props) => {
  const navigate = useNavigate();
  const [isformModelOpen, setFormModalOpen] = useState<boolean>(false);

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  return (
    <div className="profile-bar-container">
      <ProfileCard justtfyContent="around">
        <AccountCircle fontSize="large" />
        <div>
          <h3>{user.fullName || "Username"}</h3>
          <h4 className="color-grey"><FmdGood/> {user.location || "Location"}</h4>
        </div>
        <button onClick={handleLogout} className="profile-logout-button">
          <img src="/logout.png" alt="logout" />
        </button>
      </ProfileCard>
      <div className="profile-set">
        <Pill percent={percent} />
        <FormModal
          isOpen={isformModelOpen}
          setOpen={setFormModalOpen}
          goal={goal}
          setGoal={setGoal}
          user={user}
          setUser={setUser}
        />
      </div>
      <ProfileCard justtfyContent="around">
        <span>
          <div>
            <h1 className="display-inline">{user.weight || 0}</h1>
            <span className="color-grey">kg</span>
          </div>
          <span className="color-grey">Weight</span>
        </span>
        <span>
          <div>
            <h1 className="display-inline">{user.height || 0}</h1>
            <span className="color-grey">cm</span>
          </div>
          <span className="color-grey">Height</span>
        </span>
        <span>
          <div>
            <h1 className="display-inline">{user.age || 0}</h1>
            <span className="color-grey">yrs</span>
          </div>
          <span className="color-grey">Age</span>
        </span>
      </ProfileCard>
      <h2>Your Goals</h2>
      <ProfileCard justtfyContent="left">
        <img src="/running.png" alt="" />
        <div>
          <h3>Runnung</h3>
          <span className="color-grey">{goal.running || 0}km</span>
        </div>
      </ProfileCard>
      <ProfileCard justtfyContent="left">
        <img src="/sleeping.png" alt="" />
        <div>
          <h3>sleeping</h3>
          <span className="color-grey">{goal.sleep || 0}hrs</span>
        </div>
      </ProfileCard>
      <ProfileCard justtfyContent="left">
        <img src="/weightLoss.png" alt="" />
        <div>
          <h3>
            {`Weight ${
              (goal.weight || 0) > (user.weight || 0) ? "Gain" : "Loss"
            } Target`}
          </h3>
          <span className="color-grey">{goal.weight || 0}kg</span>
        </div>
      </ProfileCard>
      <h2>Scheduled</h2>
      {schedules.map((schedule) => (
        <ProfileCard justtfyContent="around" key={schedule.id}>
          <img src="/yoga.png" alt="schedule" />
          <div>
            <h3>{schedule.taskName}</h3>
            <span className="color-grey">{schedule.category}</span>
          </div>
          <div className="color-grey">
            {new Date(schedule.date).toDateString().substring(4, 10)}
          </div>
        </ProfileCard>
      ))}
    </div>
  );
};

export default ProfileBar;
