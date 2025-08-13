import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "./User.model";

@Entity({ name: "goals" })
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ nullable: true })
  steps?: number;
  @Column({ nullable: true })
  running?: number;
  @Column({ nullable: true })
  sleep?: number;
  @Column({ nullable: true })
  weight?: number;
  @Column({ nullable: true })
  water?: number;

  @OneToOne(() => User, (user) => user.username)
  @JoinColumn()
  user: User;

  @Column({ nullable: true, unique: true })
  userUsername: string;

  setGoal(goal: Goal) {
    this.id = goal.id;
    this.steps = goal.steps;
    this.running = goal.running;
    this.sleep = goal.sleep;
    this.weight = goal.weight;
    this.water = goal.water;
  }
}
export default Goal;
