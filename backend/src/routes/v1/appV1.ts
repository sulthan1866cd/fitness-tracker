import { Router } from "express";
import userRouter from "./user.route";
import goalRouter from "./goal.route"
import errorHandler from "../../middleware/errorHandler";
const app = Router();
app.use("/users", userRouter);
app.use("/goals",goalRouter)
app.use(errorHandler)
export default app;
