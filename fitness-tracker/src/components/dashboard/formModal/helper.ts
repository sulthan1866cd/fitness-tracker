import type React from "react";

export const validateNumbers = (
  setError: React.Dispatch<React.SetStateAction<string>>,
  field: string,
  value: number,
  min: number,
  max: number
) => {
  if (value === 0 || (value >= min && value < max)) {
    setError("");
    return true;
  }
  setError(`${field} value should be between ${min} and ${max}`);
  return false;
};
