export interface ISchedule {
  id?: number;
  taskName: string;
  category: "Fitness" | "Diet";
  date: Date;
  userUsername: string;
}

