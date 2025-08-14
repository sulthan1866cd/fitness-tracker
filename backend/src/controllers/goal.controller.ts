import { NextFunction } from "express";
import Goal from "../models/Goal.model";
import { updateGoal } from "../services/goal.service";

export const setAndUpdateGoal = async (goal: Goal, next: NextFunction) => {
  try {
    const newGoal: Goal = new Goal();
    newGoal.setGoal(goal);
    const updatedGoal: Goal | false = await updateGoal(goal);

    if (!updatedGoal) return false;
    updatedGoal.userUsername = goal.userUsername;
    return updatedGoal;
  } catch (error) {
    next(error);
  }
  return false;
};
