export const verifyEmptyField = (
  value: string,
  setError: React.Dispatch<React.SetStateAction<string>>,
  errorMessage: string
) => {
  if (value.trim() === "") {
    setError(errorMessage);
    return false;
  }
  setError("");
  return true;
};
