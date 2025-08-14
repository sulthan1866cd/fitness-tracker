import { NextFunction, Request, Response, Router } from "express";
import {
  isUserAlreadyExists,
  setAndCreateUser,
} from "../../controllers/user.controller";
import {
  getUserByEmail,
  getUserByUsername,
  getUsers,
  updateUser,
} from "../../services/user.service";
import User from "../../models/User.model";
import { getGoalByUsername } from "../../services/goal.service";
import Goal from "../../models/Goal.model";

const router = Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  const newUser: User = req.body;

  if (await isUserAlreadyExists(newUser, next)) {
    res.status(409).json({ message: "username or email already exists" });
    return;
  }
  const createdUser: User = (await setAndCreateUser(newUser, next)) as User;
  res.status(201).json(createdUser);
});

router.post("/:username", async (req: Request, res: Response) => {
  const username: string = req.params.username;
  const { password }: { password: string } = req.body;
  const user: User = (await getUserByUsername(username)) as User;
  if (!user || user.password !== password) {
    return res.status(401).json({ message: "invalid username or password" });
  }
  res.json(user);
});

router.get("/", async (req: Request, res: Response) => {
  const users = await getUsers();
  res.json(users);
});

router.get("/:username", async (req: Request, res: Response) => {
  const username: string = req.params.username;
  const user: User = (await getUserByUsername(username)) as User;
  res.json(user);
});

router.put(
  "/:username",
  async (req: Request, res: Response, next: NextFunction) => {
    const userdetails: User = req.body;
    const updatedUser: User | false = await updateUser(userdetails);
    if (!updatedUser)
      return res.status(404).json({ message: "user not found" });
    res.json(updatedUser);
  }
);

export default router;
