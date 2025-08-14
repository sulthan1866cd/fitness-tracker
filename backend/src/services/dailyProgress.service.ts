import DailyProgress from "../models/DailyProgress.model";
import dailyProgressRepository from "../repositories/dailyProgress.repository";

export const createDailyProgress = (dailyProgress: DailyProgress) => {
  return dailyProgressRepository.save(dailyProgress);
};

export const getDailyProgressByUsername = (username: string) => {
  return dailyProgressRepository.findBy({ userUsername: username });
};
