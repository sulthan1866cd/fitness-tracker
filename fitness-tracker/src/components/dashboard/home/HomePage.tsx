import type { IGoal } from "../../../interfaces/goal.interface";
import type { IDailyProgress } from "../../../interfaces/dailyProgress.interface";
import "./HompPage.css";
import { useState } from "react";
import DailyProgress from "./DailyProgress";
import WeeklyProgress from "./WeeklyProgress";
import TrainersPlan from "./TrainersPlan";
import { greeting } from "./helper";
interface Props {
  goal: IGoal;
  dailyProgresses: IDailyProgress[];
}
const HomePage = ({ goal, dailyProgresses }: Props) => {
  
  const [dailyProgressIndex, setDailyProgressIndex] = useState<number>(6);

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
      <TrainersPlan/>
    </div>
  );
};

export default HomePage;
