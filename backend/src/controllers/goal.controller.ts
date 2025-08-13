import Goal from "../models/Goal.model";
import { updateGoal } from "../services/goal.service";

export const setAndUpdateGoal = async (goal: Goal) => {
  const newGoal:Goal = new Goal();
  newGoal.setGoal(goal);
  const updatedGoal = await updateGoal(goal);
  updatedGoal.userUsername = goal.userUsername;
  return updatedGoal;
};
