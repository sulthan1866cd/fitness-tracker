import dataSource from "../configs/db.config";
import  User  from "../models/User.model";

const userRepository = dataSource.getRepository(User);

export default userRepository;
