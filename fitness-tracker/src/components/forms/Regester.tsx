import { useState } from "react";
import Input from "../utilComponents/Input";
import "./Form.css";
import Button from "../utilComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import { verifyEmptyField } from "./helper";

const Regester = () => {
  const [error, setError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const navigation = useNavigate();

  const handleSubmit = async () => {
    if (
      !(
        verifyEmptyField(username, setError, "please enter username") &&
        verifyEmptyField(email, setError, "please enter email") &&
        verifyEmptyField(password, setError, "please enter password") &&
        verifyEmptyField(
          confirmPassword,
          setEmail,
          "please enter confirm password"
        )
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
      setError("user name or password already exists");
      return;
    }
    if (result.status === 201) {
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
          <Link to={"/login"} className="link">
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
