export interface IDietPlan {
  id: number;
  time: "Breakfast" | "Lunch" | "Dinner";
  foodNames: string[];
  foodImgs: string[];
  carbs: number[];
  protien: number[];
  fat: number[];
}
