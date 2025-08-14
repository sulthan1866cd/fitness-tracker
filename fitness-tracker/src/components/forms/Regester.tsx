import { useState } from "react";
import Input from "../utilComponents/Input";
import "./Form.css";
import Button from "../utilComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import { verifyEmptyField } from "./helper";
import {
  getDummyDailyProgress,
  getDummySchedules,
} from "../../utils/dummyDatas";
import type { ISchedule } from "../../interfaces/schedule.interface";
import type { IDailyProgress } from "../../interfaces/dailyProgress.interface";

const Regester = () => {
  const [error, setError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigation = useNavigate();

  const validateEmail = (email: string) => {
    const regex: RegExp = /[a-zA-z1-9]+\@[a-zA-z1-9]+\.[a-zA-z1-9]+/;
    if (!regex.test(email)) {
      setError("Invalid Email format");
    }
    setError("");
    return true;
  };

  const validatePassword = (password: string, confirmPassword: string) => {
    if (password.length < 8) {
      setError("Password should be at least 8 characters");
      return false;
    }
    if (password !== confirmPassword) {
      setError("Password and confirm password dosent match");
      return false;
    }
    setError("");
    return true;
  };
  const handleSubmit = async () => {
    if (
      !(
        verifyEmptyField(username, setError, "please enter username") &&
        verifyEmptyField(email, setError, "please enter email") &&
        validateEmail(email) &&
        verifyEmptyField(password, setError, "please enter password") &&
        verifyEmptyField(
          confirmPassword,
          setError,
          "please enter confirm password"
        ) &&
        validatePassword(password, confirmPassword)
      )
    )
      return;
    const response = fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL_V1}/users`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      }
    );
    const result = await response;
    if (result.status === 409) {
      setError("user name or email already exists");
      return;
    }
    if (result.status === 201) {
      //================ posting dummy datas ====================
      const schedules: ISchedule[] = getDummySchedules(username);
      for (let index = 0; index < schedules.length; index++) {
        await fetch(
          `${import.meta.env.VITE_BACKEND_BASE_URL_V1}/schedules/${username}`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(schedules[index]),
          }
        );
      }

      const dailyProgress: IDailyProgress[] = getDummyDailyProgress(username);
      for (let index = 0; index < dailyProgress.length; index++) {
        await fetch(
          `${
            import.meta.env.VITE_BACKEND_BASE_URL_V1
          }/daily-progress/${username}`,
          {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(dailyProgress[index]),
          }
        );
      }

      localStorage.setItem("username", username);
      navigation(`/user/${username}`);
    }
  };

  return (
    <div className="form-container">
      <section className="form-section">
        <img src="/cd.png" alt="CD" />
        <h2>Please Fill out form to Register</h2>
        <p className="color-red">{error}</p>
        <Input
          value={username}
          setValue={setUsername}
          type="text"
          placeholder="Username"
          required
        />
        <Input
          value={email}
          setValue={setEmail}
          type="email"
          placeholder="Email"
          required
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Password"
          required
        />
        <Input
          value={confirmPassword}
          setValue={setConfirmPassword}
          type="password"
          placeholder="Confirm Password"
          required
        />
        <Button onClick={handleSubmit} color="yellow">
          Regester
        </Button>
        <p>
          Yes i have an account?
          <Link to={"/"} className="link">
            Login
          </Link>
        </p>
      </section>
      <section>
        <img className="form-image" src="/regester.png" alt="jogging" />
      </section>
    </div>
  );
};

export default Regester;
