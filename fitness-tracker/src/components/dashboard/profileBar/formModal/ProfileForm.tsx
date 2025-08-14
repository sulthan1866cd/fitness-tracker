import React, {  useState } from "react";
import Input from "../../../utilComponents/Input";
import Button from "../../../utilComponents/Button";
import type { IUser } from "../../../../interfaces/user.interface";
import { setDecimal, validateNumbers } from "./helper";
interface Props {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}
const ProfileForm = ({
  user,
  setUser,
  setOpen,
  setError,
  setMessage,
}: Props) => {
  const [name, setName] = useState<string>(user.fullName || "");
  const [location, setLocation] = useState<string>(user.location || "");
  const [dateOfBirth, setDateOfBirth] = useState<Date>(user.dateOfBirth||new Date());
  const [height, setHeight] = useState<number>(user.height ||0);
  const [weight, setWeight] = useState<number>(user.weight || 0);

  const handleSave = async () => {
    let age = new Date().getFullYear() - new Date(dateOfBirth).getFullYear();

    if (
      !(
        validateNumbers(
          setError,
          "height",
          height,
          50,
          250,
        ) &&
        validateNumbers(
          setError,
          "weight",
          weight,
          30,
          250,
        ) &&
        validateNumbers(setError, "age", age, 10, 120)
      )
    )
      return;
    const response = await fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL_V1}/users/${user.username}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          password: user.password,
          email: user.email,
          fullName: name,
          location: location,
          dateOfBirth: dateOfBirth,
          height: setDecimal(height),
          weight: setDecimal(weight),
          age,
        }),
      }
    );
    if (response.status === 200) {
      setMessage("profile updated sucessfully");
      setTimeout(() => {
        setMessage("");
      }, 3000);
      const result: IUser = await response.json();
      setUser(result);
    } else {
      setError("somthing went wrong");
    }
  };
  return (
    <div>
      <Input
        value={name}
        setValue={setName}
        type="text"
        placeholder="Full Name"
      />
      <Input
        value={location}
        setValue={setLocation}
        type="text"
        placeholder="Your Location"
      />
      <Input
        value={dateOfBirth}
        setValue={setDateOfBirth}
        type="date"
        placeholder="Date of Birth"
      />
      <Input
        value={height}
        setValue={setHeight}
        type="text"
        placeholder="Your height in cm"
      />
      <Input
        value={weight}
        setValue={setWeight}
        type="text"
        placeholder="Your weight in kg"
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

export default ProfileForm;
