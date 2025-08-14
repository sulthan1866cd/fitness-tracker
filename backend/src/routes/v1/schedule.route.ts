import { Request, Response, Router } from "express";
import {
  createSchedule,
  getSchedulesByUsername,
} from "../../services/schedule.service";
import Schedule from "../../models/Schedule.model";

const router = Router();

router.post("/:username", async (req: Request, res: Response) => {
  const schedule: Schedule = req.body;
  const createdSchedule: Schedule = await createSchedule(schedule);
  res.json(createdSchedule);
});

router.get("/:username", async (req: Request, res: Response) => {
  const username: string = req.params.username;
  const schedules: Schedule[] = await getSchedulesByUsername(username);
  res.json(schedules);
});

export default router;
