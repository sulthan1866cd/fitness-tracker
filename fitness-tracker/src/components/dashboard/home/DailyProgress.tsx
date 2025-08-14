import ActivityCard from "./activityCard/ActivityCard";
import {
  DirectionsRun,
  Favorite,
  ShowChart,
  Speed,
  WaterDrop,
  Whatshot,
} from "@mui/icons-material";
import type { IDailyProgress } from "../../../interfaces/dailyProgress.interface";
import type { IGoal } from "../../../interfaces/goal.interface";
interface Props {
  dailyProgresses: IDailyProgress[];
  goal: IGoal;
  dailyProgressIndex: number;
}
const DailyProgress = ({
  dailyProgresses,
  goal,
  dailyProgressIndex,
}: Props) => {
  const barLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <div className="display-flex">
      <ActivityCard size={25} color="green">
        <div>
          <DirectionsRun fontSize="large" />
          <h2 className="display-inline">Steps</h2>
        </div>
        <h4>
          {`${dailyProgresses[dailyProgressIndex]?.steps} / ${goal.steps} steps`}{" "}
        </h4>
        <div className="activity-card-slider">
          <div />
        </div>
        <p>
          {`${Math.floor(
            (dailyProgresses[dailyProgressIndex]?.steps / (goal.steps || 1)) *
              100
          )}
            % of your goals`}
        </p>
      </ActivityCard>
      <ActivityCard size={25} color="blue">
        <div>
          <WaterDrop fontSize="large" />
          <h2 className="display-inline">Water</h2>
        </div>
        <h4>{`${dailyProgresses[dailyProgressIndex]?.water} Liters`}</h4>
        <div className="activity-card-slider">
          <div />
        </div>
      </ActivityCard>
      <ActivityCard size={25} color="yellow">
        <div>
          <Whatshot fontSize="large" />
          <h2 className="display-inline">Calories</h2>
        </div>
        <Speed className="calories-icon" />
        <p className="color-black">{`${dailyProgresses[dailyProgressIndex]?.calories} ${barLabels[dailyProgressIndex]}`}</p>
      </ActivityCard>
      <ActivityCard size={25} color="red">
        <div>
          <Favorite fontSize="large" />
          <h2 className="display-inline">Heart Rate</h2>
        </div>
        <ShowChart className="heart-rate-icon" />
        <h4>{`${dailyProgresses[dailyProgressIndex]?.heartRate} Bpm`}</h4>
      </ActivityCard>
    </div>
  );
};

export default DailyProgress;
