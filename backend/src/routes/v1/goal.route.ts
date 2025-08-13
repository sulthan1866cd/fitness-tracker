import { Request, Response, Router } from "express";
import Goal from "../../models/Goal.model";
import { getGoalByUsername } from "../../services/goal.service";
import { setAndUpdateGoal } from "../../controllers/goal.controller";

const router = Router();

router.get("/:username", async (req: Request, res: Response) => {
  const username: string = req.params.username;
  const goal: Goal = (await getGoalByUsername(username)) as Goal;
  res.json(goal);
});

router.put("/:username", async (req: Request, res: Response) => {
  const goal: Goal = req.body;
  const updatedGoal = await setAndUpdateGoal(goal);
  res.json(updatedGoal);
});

export default router;
