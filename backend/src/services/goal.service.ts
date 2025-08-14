import Goal from "../models/Goal.model";
import goalRepository from "../repositories/goal.repository";

export const createGoal = (goal: Goal) => {
  return goalRepository.save(goal);
};

export const getGoalByUsername = (username: string) => {
  return goalRepository.findOneBy({ userUsername: username });
};

export const updateGoal = async (goal: Goal) => {
  if (await goalRepository.findOneBy({ id: goal.id }))
    return goalRepository.save(goal);
  return false;
};
