export const timeHrs = Number(new Date().toTimeString().substring(0, 2));
export const greeting =
  timeHrs < 12
    ? "Morning"
    : timeHrs >= 12 && timeHrs < 19
    ? "Afternoon"
    : "Night";
