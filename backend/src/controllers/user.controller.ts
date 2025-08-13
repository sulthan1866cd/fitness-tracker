import { NextFunction } from "express";
import { createUser, getUserByUsernameOrEmail } from "../services/user.service";
import User from "../models/User.model";
import Goal from "../models/Goal.model";
import { createGoal } from "../services/goal.service";
import Schedule from "../models/Schedule.model";
import { createSchedule } from "../services/schedule.service";

export const isUserAlreadyExists = async (user: User, next: NextFunction) => {
  try {
    return await getUserByUsernameOrEmail(user.username, user.email);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const setAndCreateUser = async (user: User, next: NextFunction) => {
  try {
    const newUser: User = new User();

    const goal: Goal = new Goal();
    goal.userUsername = user.username;
    createGoal(goal);
    newUser.setUser(user);

    const createdUser = await createUser(newUser);

    //data should be from user from different endpoint one by one
    const schedule1 = new Schedule(
      user.username,
      "Training - Yoga Class",
      "Fitness",
      new Date()
    );
    const schedule2 = new Schedule(
      user.username,
      "Training - Swimming",
      "Fitness",
      new Date()
    );
    createSchedule(schedule1);
    createSchedule(schedule2);

    return createdUser;
  } catch (error) {
    console.log(error);
    next(error);
  }
};
