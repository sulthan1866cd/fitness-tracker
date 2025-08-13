import dataSource from "../configs/db.config";
import Schedule from "../models/Schedule.model";

const scheduleRepository = dataSource.getRepository(Schedule);

export default scheduleRepository;
