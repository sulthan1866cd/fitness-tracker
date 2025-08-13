import { useEffect, useState } from "react";
import { type IUser } from "../../interfaces/user.interface";
import { useNavigate, useParams } from "react-router-dom";
import { type IGoal } from "../../interfaces/goal.interface";
import ProfileBar from "./profileBar/ProfileBar";
import Sidebar from "./sidebar/Sidebar";
import "./Dashboard.css";
import ActivityCard from "./activityCard/ActivityCard";
import { type ISchedule } from "../../interfaces/schedule.interface";
import { fetchData } from "../../utils";

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState<IUser>({
    username: "Username",
    password: "",
    email: "",
  });
  const [profilePresent, setProfileSet] = useState<number>(0);
  const { username } = useParams();
  const [goal, setGoal] = useState<IGoal>({
    id: 0,
    userUsername: username || "Username",
  });
  const [schedules, setSchedules] = useState<ISchedule[]>([]);
  const countDefined = (data: IGoal | IUser) => {
    let notNull = 0;
    for (const key in data) {
      //@ts-ignore
      if (data[key] !== null) {
        notNull++;
      }
    }
    return notNull;
  };
  const time = Number(new Date().toTimeString().substring(0, 2));
  const greeting =
    time < 12 ? "Morning" : time >= 12 && time < 16 ? "Afternoon" : "Night";

  const navigete = useNavigate();
  useEffect(() => {
    if (username !== localStorage.getItem("username")) {
      navigete("/login");
    }
  }, []);
  useEffect(() => {
    fetchData(username, "users", setUserDetails);
    fetchData(username, "goals", setGoal);
    fetchData(username, "schedules", setSchedules);
  }, []);

  useEffect(() => {
    const progress = countDefined(userDetails) + countDefined(goal) - 5; //pre defined profile fields;
    const percent = Math.floor((progress / 11) * 100);
    setProfileSet(percent);
  }, [goal, userDetails]);
  return (
    <div className="display-flex">
      <Sidebar />
      <div className="dashboard-container">
        <h3>{`Good ${greeting}`}</h3>
        <h1>{"Welcome Back 🎉"}</h1>
        <div className="display-flex">
          <ActivityCard size={25} color="green">
            <p>0/{goal.steps}steps </p>
          </ActivityCard>
          <ActivityCard size={25} color="blue">
            <p>0/{goal.water} ltr</p>
          </ActivityCard>
          <ActivityCard size={25} color="yellow">
            calories
          </ActivityCard>
          <ActivityCard size={25} color="red">
            110bpm
          </ActivityCard>
        </div>
        <div className="display-flex">
          <ActivityCard size={50} color="transperentGreen">
            hwllo
          </ActivityCard>
          <ActivityCard size={50} color="transperentGreen">
            hwllo
          </ActivityCard>
        </div>
      </div>

      <ProfileBar
        user={userDetails}
        setUser={setUserDetails}
        goal={goal}
        setGoal={setGoal}
        percent={profilePresent}
        schedules={schedules}
      />
    </div>
  );
};

export default Dashboard;
