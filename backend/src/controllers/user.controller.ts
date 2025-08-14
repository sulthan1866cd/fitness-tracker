import { NextFunction } from "express";
import { createUser, getUserByUsernameOrEmail } from "../services/user.service";
import User from "../models/User.model";
import Goal from "../models/Goal.model";
import { createGoal } from "../services/goal.service";

export const isUserAlreadyExists = async (user: User, next: NextFunction) => {
  try {
    return await getUserByUsernameOrEmail(user.username, user.email);
  } catch (error) {
    next(error);
  }
};

export const setAndCreateUser = async (user: User, next: NextFunction) => {
  try {
    const newUser: User = new User();

    newUser.setUser(user);
    const createdUser = await createUser(newUser);

    const goal: Goal = new Goal();
    goal.userUsername = user.username;
    createGoal(goal);
    return createdUser;
  } catch (error) {
    next(error);
  }
};
