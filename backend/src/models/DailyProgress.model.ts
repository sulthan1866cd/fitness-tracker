import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User.model";

@Entity()
class DailyProgress {
  @PrimaryGeneratedColumn()
  id: string;
  @Column()
  steps: number;
  @Column()
  water: number;
  @Column()
  calories: number;
  @Column()
  heartRate: number;
  @Column()
  percent: number;
  @Column()
  cardio: number;
  @Column()
  stretching: number;
  @Column()
  treadmill: number;
  @Column()
  strength: number;

  @ManyToOne(() => User, (user) => user.username)
  @JoinColumn()
  user: User;
  
  @Column()
  userUsername: string;

  setDailyProgress(dailyProgress: DailyProgress) {
    this.steps = dailyProgress.steps;
    this.water = dailyProgress.water;
    this.calories = dailyProgress.calories;
    this.heartRate = dailyProgress.heartRate;
    this.percent = dailyProgress.percent;
  }
}

export default DailyProgress;
