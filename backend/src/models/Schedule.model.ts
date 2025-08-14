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
  category: "Fitness" | "Diet";
  @Column()
  date: Date;

  @ManyToOne(() => User, (user) => user.username)
  @JoinColumn()
  user: User;

  @Column()
  userUsername: string;

  setSchedule(schedule: Schedule) {
    this.userUsername = schedule.userUsername;
    this.taskName = schedule.taskName;
    this.category = schedule.category;
    this.date = schedule.date;
  }
}
export default Schedule;
