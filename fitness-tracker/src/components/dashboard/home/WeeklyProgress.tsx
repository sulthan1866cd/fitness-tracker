import { Bar, Doughnut } from "react-chartjs-2";
import ActivityCard from "./activityCard/ActivityCard";
import { Chart as Chartjs, type ChartData } from "chart.js/auto";
import React, { useState, type SetStateAction } from "react";
import type { IDailyProgress } from "../../../interfaces/dailyProgress.interface";

interface Props {
  dailyProgresses: IDailyProgress[];
  setDailyProgressIndex: React.Dispatch<SetStateAction<number>>;
}

const WeeklyProgress = ({ dailyProgresses, setDailyProgressIndex }: Props) => {
  const [selectedProgress, setSelectedProgress] = useState<
    "Cardio" | "Stretching" | "Treadmill" | "Strength"
  >("Cardio");
  const barCardData: ChartData<"bar", number[], string> = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: dailyProgresses.map((progress) => progress.percent),
        backgroundColor: "rgba(227, 255, 66,0.6)",
        hoverBackgroundColor: "rgba(217, 255, 0, 1)",
        borderRadius: 10,
      },
    ],
  };
  const doughnutLabels: ("Cardio" | "Stretching" | "Treadmill" | "Strength")[] =
    ["Cardio", "Stretching", "Treadmill", "Strength"];

  const doughnutValues = {
    Cardio: 0,
    Stretching: 0,
    Treadmill: 0,
    Strength: 0,
  };
  for (const progress of dailyProgresses) {
    doughnutValues.Cardio += progress.cardio;
    doughnutValues.Strength += progress.strength;
    doughnutValues.Stretching += progress.stretching;
    doughnutValues.Treadmill += progress.treadmill;
  }
  const doughnutCardData: ChartData<"doughnut", number[], string> = {
    labels: doughnutLabels,
    datasets: [
      {
        data: Object.values(doughnutValues),
      },
    ],
  };
  return (
    <div className="display-flex">
      <ActivityCard size={50} color="transperentGreen">
        <h1 className="color-black">Activity</h1>
        <Bar
          data={barCardData}
          options={{
            plugins: { legend: { display: false } },
            onClick: (event, elments) => {
              setDailyProgressIndex(elments[0].index);
            },
            scales: {
              y: {
                display: false,
              },
            },
          }}
        />
      </ActivityCard>
      <ActivityCard size={50} color="transperentGreen">
        <h1 className="color-black">Progress</h1>

        <Doughnut
          className="activity-card-doughnut"
          data={doughnutCardData}
          options={{
            plugins: { legend: { display: false } },
            radius: 160,
            onClick: (event, elements) => {
              setSelectedProgress(doughnutLabels[elements[0].index]);
            },
          }}
        />
        <div className="doughnut-selected-value color-black"><h2>{selectedProgress} </h2>{`${doughnutValues[selectedProgress]} hrs`}</div>

        <div className="doughnut-values">
          {Object.values(doughnutValues).map((value, index) => (
            <p key={index} className="color-black">
              <span>{doughnutLabels[index]}</span>
              <span>{`${value} hrs`}</span>
            </p>
          ))}
        </div>
      </ActivityCard>
    </div>
  );
};

export default WeeklyProgress;
