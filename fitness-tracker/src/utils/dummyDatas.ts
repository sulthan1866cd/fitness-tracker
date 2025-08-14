import type { IDailyProgress } from "../interfaces/dailyProgress.interface";
import type { IDietPlan } from "../interfaces/dietPlan.interface";
import type { ISchedule } from "../interfaces/schedule.interface";
import type { ITrainer } from "../interfaces/trainer.interface";

export const getDummySchedules = (username: string) => {
  const schedules: ISchedule[] = [
    {
      userUsername: username,
      taskName: "Training - Yoga Class",
      category: "Fitness",
      date: new Date(),
    },
    {
      userUsername: username,
      taskName: "Purchace - Protien",
      category: "Diet",
      date: new Date(),
    },
  ];
  return schedules;
};
const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const getDummyDailyProgress = (username: string) => {
  const dailyProgresses: IDailyProgress[] = [];
  for (let index = 0; index < 7; index++)
    dailyProgresses.push({
      userUsername: username,
      steps: getRandomNumber(1000, 5000),
      water: getRandomNumber(2, 5),
      calories: getRandomNumber(2500, 5000),
      heartRate: 110,
      percent: getRandomNumber(20, 100),
      cardio: getRandomNumber(1, 6),
      stretching: getRandomNumber(1, 6),
      treadmill: getRandomNumber(1, 6),
      strength: getRandomNumber(1, 6),
    });

  return dailyProgresses;
};

export const dummyTrainers: ITrainer[] = [
  {
    id: 1,
    bgImg: "/trainerBg1.png",
    profileImg: "/trainerProfile1.png",
    speciliziation: "Fitness Specialist",
    medal: 25,
    star: 104,
    name: "Cameron Williamson",
  },
  {
    id: 2,
    bgImg: "/trainerBg2.png",
    profileImg: "/trainerProfile2.png",
    speciliziation: "Fitness Specialist",
    medal: 20,
    star: 100,
    name: "William Cameronson",
  },
];

export const dummyDietPlans: IDietPlan[] = [
  {
    id: 1,
    time: "Breakfast",
    foodNames: ["Avacado Salad", "Soup"],
    foodImgs: ["/food1.png", "/food2.png"],
    carbs: [5, 26],
    protien: [34, 7],
    fat: [4, 25],
  },
  {
    id: 2,
    time: "Lunch",
    foodNames: ["Avacado Salad", "Blueberry"],
    foodImgs: ["/food2.png", "/food1.png"],
    carbs: [5, 24],
    protien: [14, 6],
    fat: [4, 11],
  },
  {
    id: 3,
    time: "Dinner",
    foodNames: ["Avacado Salad", "Rice"],
    foodImgs: ["/food1.png", "/food2.png"],
    carbs: [5, 10],
    protien: [4.3],
    fat: [4.6],
  },
];
