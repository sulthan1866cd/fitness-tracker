import dataSource from "../configs/db.config";
import DailyProgress from "../models/DailyProgress.model";

const dailyProgressRepository = dataSource.getRepository(DailyProgress);

export default dailyProgressRepository;
