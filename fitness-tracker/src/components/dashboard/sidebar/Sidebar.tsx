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
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const path = useLocation().pathname.split("/").pop() as
    | "home"
    | "graph"
    | "steps"
    | "messages"
    | "directions"
    | "settings"
    | "wallet";
  const [selected, setSelected] = useState<
    "home" | "graph" | "steps" | "messages" | "directions" | "settings" | "wallet"
  >(path);
  const navigation = useNavigate();
  const handleNavigation = (
    path:
      | "home"
      | "graph"
      | "steps"
      | "messages"
      | "directions"
      | "settings"
      | "wallet"
  ) => {
    setSelected(path);
    navigation(path);
  };
  return (
    <div className="sidebar-container">
      <img src="/logo.png" alt="logo" />
      <div onClick={() => handleNavigation("home")}>
        <Home
          fontSize="large"
          className={selected === "home" ? "sidebar-icon-active" : "sidebar-icons"}
        />
      </div>
      <div onClick={() => handleNavigation("graph")}>
        <ShowChart
          fontSize="large"
          className={
            selected === "graph" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => handleNavigation("steps")}>
        <DirectionsRun
          fontSize="large"
          className={
            selected === "steps" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => handleNavigation("messages")}>
        <ForumRounded
          fontSize="large"
          className={
            selected === "messages" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => handleNavigation("directions")}>
        <Explore
          fontSize="large"
          className={
            selected === "directions" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => handleNavigation("settings")}>
        <Settings
          fontSize="large"
          className={
            selected === "settings" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => handleNavigation("wallet")}>
        <AccountBalanceWallet
          fontSize="large"
          className={
            selected === "wallet" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
    </div>
  );
};

export default Sidebar;
