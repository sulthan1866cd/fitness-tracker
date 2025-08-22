import type { IGoal } from "../../../interfaces/goal.interface";
import type { IDailyProgress } from "../../../interfaces/dailyProgress.interface";
import "./HompPage.css";
import { useEffect, useState } from "react";
import DailyProgress from "./DailyProgress";
import WeeklyProgress from "./WeeklyProgress";
import TrainersPlan from "./TrainersPlan";
import { greeting } from "./helper";
import { fetchData } from "../../../utils/fetchData";
import { useOutletContext } from "react-router-dom";

const HomePage = () => {
  const goal = useOutletContext<IGoal>();
  const [dailyProgresses, setDailyProgresses] = useState<IDailyProgress[]>([]);
  const [dailyProgressIndex, setDailyProgressIndex] = useState<number>(6);

  useEffect(() => {
    fetchData(goal.userUsername, "daily-progress", setDailyProgresses);
  }, []);

  return (
    <div className="dashboard-container">
      <h3>{`Good ${greeting}`}</h3>
      <h1>{"Welcome Back 🎉"}</h1>
      <DailyProgress
        dailyProgresses={dailyProgresses}
        dailyProgressIndex={dailyProgressIndex}
        goal={goal}
      />
      <WeeklyProgress
        dailyProgresses={dailyProgresses}
        setDailyProgressIndex={setDailyProgressIndex}
      />
      <TrainersPlan />
    </div>
  );
};

export default HomePage;
