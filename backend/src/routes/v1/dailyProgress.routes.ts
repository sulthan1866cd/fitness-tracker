import { Request, Response, Router } from "express";
import {
  createDailyProgress,
  getDailyProgressByUsername,
} from "../../services/dailyProgress.service";
import DailyProgress from "../../models/DailyProgress.model";

const router = Router();

router.post("/:username", async (req: Request, res: Response) => {
  const dailyProgress: DailyProgress = req.body;
  const createdDailyProgresses: DailyProgress = await createDailyProgress(
    dailyProgress
  );
  res.json(createdDailyProgresses);
});

router.get("/:username", async (req: Request, res: Response) => {
  const username: string = req.params.username;
  const dailyProgresses: DailyProgress[] = await getDailyProgressByUsername(
    username
  );
  res.json(dailyProgresses);
});
export default router;
