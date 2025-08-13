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

interface Props {
  selected:
    | "Home"
    | "ShowChart"
    | "DirectionsRun"
    | "ForumRounded"
    | "Explore"
    | "Settings"
    | "AccountBalance";
  setSelected: React.Dispatch<
    React.SetStateAction<
      | "Home"
      | "ShowChart"
      | "DirectionsRun"
      | "ForumRounded"
      | "Explore"
      | "Settings"
      | "AccountBalance"
    >
  >;
}
const Sidebar = ({selected,setSelected}:Props) => {

  return (
    <div className="sidebar-container">
      <img src="/logo.png" alt="" />
      <div onClick={() => setSelected("Home")}>
        <Home
          fontSize="large"
          className={
            selected === "Home" ? "sidebar-icon-active" : "sidebar-icons"
          }
          children={<button onClick={() => setSelected("Home")}></button>}
        />
      </div>
      <div onClick={() => setSelected("ShowChart")}>
        <ShowChart
          fontSize="large"
          className={
            selected === "ShowChart" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => setSelected("DirectionsRun")}>
        <DirectionsRun
          fontSize="large"
          className={
            selected === "DirectionsRun"
              ? "sidebar-icon-active"
              : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => setSelected("ForumRounded")}>
        <ForumRounded
          fontSize="large"
          className={
            selected === "ForumRounded"
              ? "sidebar-icon-active"
              : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => setSelected("Explore")}>
        <Explore
          fontSize="large"
          className={
            selected === "Explore" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => setSelected("Settings")}>
        <Settings
          fontSize="large"
          className={
            selected === "Settings" ? "sidebar-icon-active" : "sidebar-icons"
          }
        />
      </div>
      <div onClick={() => setSelected("AccountBalance")}>
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
