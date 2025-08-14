import User from "../models/User.model";
import userRepository from "../repositories/user.repository";

export const createUser = (newUser: User) => {
  return userRepository.save(newUser);
};

export const getUsers = () => {
  return userRepository.find();
};
export const getUserByUsername = (username: string) => {
  return userRepository.findOneBy({ username });
};
export const getUserByEmail = (email: string) => {
  return userRepository.findOneBy({ email });
};
export const getUserByUsernameOrEmail = (username: string, email: string) => {
  return userRepository
    .createQueryBuilder()
    .where({ username })
    .orWhere({ email })
    .getOne();
};
export const updateUser = async (user: User) => {
  if (await getUserByUsername(user.username)) return userRepository.save(user);
  return false;
};
