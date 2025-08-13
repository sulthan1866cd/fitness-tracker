import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User.model";

@Entity({ name: "schedules" })
class Schedule {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  taskName: string;
  @Column()
  category: "Fitness" | "Diet" | "Style";
  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.username)
  @JoinColumn()
  user: User;

  @Column()
  userUsername: string;
  
  constructor(
    username: string,
    taskName: string,
    catogory: "Fitness" | "Diet" | "Style",
    date: Date
  ) {
    this.userUsername = username;
    this.taskName = taskName;
    this.category = catogory;
    this.date = date;
  }

  setSchedule = (schedule: Schedule) => {
    this.userUsername = schedule.userUsername;
    this.taskName = schedule.taskName;
    this.category = schedule.category;
    this.date = schedule.date;
  };
}
export default Schedule;
