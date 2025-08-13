export interface ISchedule {
  id: number;
  taskName: string;
  category: "Fitness" | "Diet" | "Style";
  date: Date;
  userUsername: string;
}

