import { useState } from "react";
import "./Sidebar.css";
import {
  AccountBalanceWallet,
  DirectionsRun,
  Explore,
  ForumRounded,
  Home,
  Settings,
  ShowChart,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState<
    | "Home"
    | "ShowChart"
    | "DirectionsRun"
    | "ForumRounded"
    | "Explore"
    | "Settings"
    | "AccountBalance"
  >("Home");
  const navigation = useNavigate();

  return (
    <div className="sidebar-container">
      <img src="/logo.png" alt="" />
      <div
        onClick={() => {
          setSelected("Home");
          navigation("");
        }}
      >
        <Home
          fontSize="large"
          className={
            selected === "Home" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div
        onClick={() => {
          setSelected("ShowChart");
          navigation("graph");
        }}
      >
        <ShowChart
          fontSize="large"
          className={
            selected === "ShowChart" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div
        onClick={() => {
          setSelected("DirectionsRun");
          navigation("steps");
        }}
      >
        <DirectionsRun
          fontSize="large"
          className={
            selected === "DirectionsRun"
              ? "sidebar-icon-active"
              : "sidebar-icons"
          }
        />
      </div>
      <div
        onClick={() => {
          setSelected("ForumRounded");
          navigation("messages");
        }}
      >
        <ForumRounded
          fontSize="large"
          className={
            selected === "ForumRounded"
              ? "sidebar-icon-active"
              : "sidebar-icons"
          }
        />
      </div>
      <div
        onClick={() => {
          setSelected("Explore");
          navigation("directions");
        }}
      >
        <Explore
          fontSize="large"
          className={
            selected === "Explore" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div
        onClick={() => {
          setSelected("Settings");
          navigation("settings");
        }}
      >
        <Settings
          fontSize="large"
          className={
            selected === "Settings" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div
        onClick={() => {
          setSelected("AccountBalance");
          navigation("wallet");
        }}
      >
        <AccountBalanceWallet
          fontSize="large"
          className={
            selected === "AccountBalance"
              ? "sidebar-icon-active"
              : "sidebar-icons"
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
