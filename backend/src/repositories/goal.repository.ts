import dataSource from "../configs/db.config";
import Goal from "../models/Goal.model";

const goalRepository = dataSource.getRepository(Goal);

export default goalRepository;