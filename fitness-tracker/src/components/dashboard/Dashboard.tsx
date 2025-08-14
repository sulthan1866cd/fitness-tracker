import { useEffect, useState } from "react";
import { type IUser } from "../../interfaces/user.interface";
import { useNavigate, useParams } from "react-router-dom";
import { type IGoal } from "../../interfaces/goal.interface";
import ProfileBar from "./profileBar/ProfileBar";
import Sidebar from "./sidebar/Sidebar";
import "./Dashboard.css";
import { type ISchedule } from "../../interfaces/schedule.interface";
import { fetchData } from "../../utils/fetchData";
import HomePage from "./home/HomePage";
import { type IDailyProgress } from "../../interfaces/dailyProgress.interface";
import Loading from "../loading/Loading";

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [selected, setSelected] = useState<
    | "Home"
    | "ShowChart"
    | "DirectionsRun"
    | "ForumRounded"
    | "Explore"
    | "Settings"
    | "AccountBalance"
  >("Home");

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
  const [dailyProgresses, setDailyProgresses] = useState<IDailyProgress[]>([]);

  const countDefined = (data: IGoal | IUser) => {
    let notNull = 0;
    Object.values(data).forEach((value) => {
      if (value) notNull++;
    });
    return notNull;
  };

  const navigete = useNavigate();
  useEffect(() => {
    if (username !== localStorage.getItem("username")) {
      navigete("/");
    }
  }, []);
  useEffect(() => {
    const fetchAllData = async() => {
     const hasFetched = await fetchData(username, "users", setUserDetails);
      fetchData(username, "goals", setGoal);
      fetchData(username, "schedules", setSchedules);
      fetchData(username, "daily-progress", setDailyProgresses);
      setLoading(!hasFetched)
    };
    fetchAllData()
  }, []);

  useEffect(() => {
    const progress = countDefined(userDetails) + countDefined(goal) - 5; //pre defined profile fields;
    const percent = Math.floor((progress / 11) * 100);
    setProfileSet(percent);
  }, [goal, userDetails]);

  if (loading) return <Loading />;

  return (
    <div className="display-flex">
      <Sidebar selected={selected} setSelected={setSelected} />
      {selected === "Home" ? (
        <HomePage goal={goal} dailyProgresses={dailyProgresses} />
      ) : (
        <div className="dashboard-container">
          <h1>{selected} page build in progress</h1>
        </div>
      )}

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
