import { useEffect, useState } from "react";
import { type IUser } from "../../interfaces/user.interface";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { type IGoal } from "../../interfaces/goal.interface";
import ProfileBar from "./profileBar/ProfileBar";
import Sidebar from "./sidebar/Sidebar";
import "./Dashboard.css";
import { type ISchedule } from "../../interfaces/schedule.interface";
import { fetchData } from "../../utils/fetchData";
import Loading from "../loading/Loading";

const Dashboard = () => {
  const [loading, setLoading] = useState<boolean>(true);

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
    const fetchAllData = async () => {
      const hasFetched = await fetchData(username, "users", setUserDetails);
      fetchData(username, "goals", setGoal);
      fetchData(username, "schedules", setSchedules);
      setLoading(!hasFetched);
    };
    fetchAllData();
  }, []);

  useEffect(() => {
    const progress = countDefined(userDetails) + countDefined(goal) - 5; //pre defined profile fields;
    const percent = Math.floor((progress / 11) * 100);
    setProfileSet(percent);
  }, [goal, userDetails]);

  if (loading) return <Loading />;

  return (
    <div className="display-flex">
      <Sidebar />
      <Outlet context={goal} />
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
