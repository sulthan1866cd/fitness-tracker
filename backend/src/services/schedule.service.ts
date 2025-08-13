import Schedule from "../models/Schedule.model";
import scheduleRepository from "../repositories/schedule.repository";

export const createSchedule = (schedule: Schedule) => {
  return scheduleRepository.save(schedule);
};
export const getSchedulesByUsername = (username: string) => {
  return scheduleRepository.findBy({ userUsername: username });
};
