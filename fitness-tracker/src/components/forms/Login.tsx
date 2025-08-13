import { useState } from "react";
import Input from "../utilComponents/Input";
import "./Form.css";
import Button from "../utilComponents/Button";
import { Link, useNavigate } from "react-router-dom";
import { verifyEmptyField } from "./helper";

const Login = () => {
  const [error, setError] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigation = useNavigate();

  const handleSubmit = async () => {
    if (
      !(
        verifyEmptyField(username, setError, "please fill username") &&
        verifyEmptyField(password, setError, "please fill password")
      )
    )
      return;

    const response = fetch(
      `${import.meta.env.VITE_BACKEND_BASE_URL_V1}/users/${username}`,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ password }),
      }
    );
    const result = await response;
    if (result.status === 401) {
      setError("wrong username or password");
      return;
    }
    if (result.status === 200) {
      localStorage.setItem("username", username);
      navigation(`/user/${username}`);
    }
  };

  return (
    <div className="form-container">
      <section>
        <img className="form-image" src="/login.png" alt="jogging" />
      </section>
      <section className="form-section">
        <img src="/cd.png" alt="" />
        <h2>Welcome Back</h2>
        <p className="color-red">{error}</p>
        <Input
          value={username}
          setValue={setUsername}
          type="text"
          placeholder="Username"
          required
        />
        <Input
          value={password}
          setValue={setPassword}
          type="password"
          placeholder="Password"
          required
        />
        <Button onClick={handleSubmit} color="yellow">
          Login
        </Button>
        <p>
          Don't have an account?
          <Link to={"/regester"} className="link">
            Regester
          </Link>
        </p>
      </section>
    </div>
  );
};

export default Login;
