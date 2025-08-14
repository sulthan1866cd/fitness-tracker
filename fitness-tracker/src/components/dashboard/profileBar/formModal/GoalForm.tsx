import React, { useState } from "react";
import Input from "../../../utilComponents/Input";
import type { IGoal } from "../../../../interfaces/goal.interface";
import Button from "../../../utilComponents/Button";
import { setDecimal, validateNumbers } from "./helper";

interface Props {
  goal: IGoal;
  setGoal: React.Dispatch<React.SetStateAction<IGoal>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const GoalForm = ({ goal, setGoal, setOpen, setError, setMessage }: Props) => {
  const [running, setRunning] = useState<number>(goal.running || 0);
  const [sleep, setSleep] = useState<number>(goal.sleep || 0);
  const [steps, setSteps] = useState<number>(goal.steps || 0);
  const [water, setWater] = useState<number>(goal.water || 0);
  const [weight, setWeight] = useState<number>(goal.weight || 0);

  const handleSave = async () => {
    if (
      !(
        validateNumbers(setError, "running", running, 2, 10000) &&
        validateNumbers(setError, "sleep", sleep, 5, 10) &&
        validateNumbers(setError, "steps", steps, 500, 10000) &&
        validateNumbers(setError, "water", water, 2, 10) &&
        validateNumbers(setError, "weight", weight, 40, 90)
      )
    )
      return;
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL_V1}/goals/${goal.userUsername}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          id: goal.id,
          userUsername: goal.userUsername,
          running: setDecimal(running),
          sleep: setDecimal(sleep),
          steps: Math.floor(steps),
          water: setDecimal(water),
          weight: setDecimal(weight),
        }),
      }
    );
    if (response.status === 200) {
      setMessage("goals saved successfully");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      const result: IGoal = await response.json();
      setGoal(result);
    } else {
      setError("somthing went wrong");
    }
  };
  return (
    <div>
      <Input
        value={steps}
        setValue={setSteps}
        type="text"
        placeholder="Steps per day"
      />
      <Input
        value={running}
        setValue={setRunning}
        type="text"
        placeholder="Running per day in km"
      />
      <Input
        value={sleep}
        setValue={setSleep}
        type="text"
        placeholder="Sleep per day in hrs"
      />
      <Input
        value={weight}
        setValue={setWeight}
        type="text"
        placeholder="Target weight in kg"
      />
      <Input
        value={water}
        setValue={setWater}
        type="text"
        placeholder="Water Ltr per day"
      />
      <div className="profile-form-buttons">
        <Button onClick={() => setOpen(false)} color="white">
          cancel
        </Button>
        <Button onClick={handleSave} color="yellow">
          Save
        </Button>
      </div>
    </div>
  );
};

export default GoalForm;
