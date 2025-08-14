import BorderCard from "./borderCard/BorderCard";
import { dummyDietPlans, dummyTrainers } from "../../../utils/dummyDatas";
import { Star, WorkspacePremium } from "@mui/icons-material";
import { greeting, timeHrs } from "./helper";

const TrainersPlan = () => {
  const dietPlanIndex =
    greeting === "Morning" ? 0 : greeting === "Afternoon" ? 1 : 2;
  return (
    <div>
      <h2>Recomended Trainer for you</h2>
      <div className="display-flex">
        {dummyTrainers.map((trainer) => (
          <BorderCard size={25} key={trainer.id}>
            <img
              className="trainer-bg-img"
              src={trainer.bgImg}
              alt={trainer.name}
            />
            <img
              className="trainer-profile-img"
              src={trainer.profileImg}
              alt="trainer"
            />
            <h3 className="color-black">{trainer.name}</h3>
            <span className="color-grey">{trainer.speciliziation}</span>
            <div className="trainer-stats">
              <span className="color-black">
                <WorkspacePremium color="warning" />
                {trainer.medal}
              </span>
              <span className="color-black">
                <Star color="warning" />
                {trainer.star}
              </span>
              <span className="color-grey">View Profile</span>
            </div>
          </BorderCard>
        ))}
        <BorderCard size={50}>
          <h3 className="diet-header">
            <span>{dummyDietPlans[dietPlanIndex].time}</span>
            <span className="color-black">{`${timeHrs % 12}:00 ${
              timeHrs < 12 ? "am" : "pm"
            }`}</span>
          </h3>
          {dummyDietPlans[dietPlanIndex].foodNames.map((foodname, index) => (
            <div className="display-flex" key={index}>
              <img
                src={dummyDietPlans[dietPlanIndex].foodImgs[index]}
                alt={foodname}
              />
              <div>
                <h3 className="color-black">{foodname}</h3>
                <div className="diet-macros">
                  <span className="color-grey">
                    {dummyDietPlans[dietPlanIndex].carbs[index]} % carbs
                  </span>
                  <span className="color-grey">
                    {dummyDietPlans[dietPlanIndex].protien[index]} % protien
                  </span>
                  <span className="color-grey">
                    {dummyDietPlans[dietPlanIndex].fat[index]} % fats
                  </span>
                </div>
              </div>
            </div>
          ))}
        </BorderCard>
      </div>
    </div>
  );
};

export default TrainersPlan;
