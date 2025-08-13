import type React from "react";
import Button from "../../utilComponents/Button";
import type { IGoal } from "../../../interfaces/goal.interface";
import { useState } from "react";
import "./FormModal.css";
import GoalForm from "./GoalForm";
import ProfileForm from "./ProfileForm";
import type { IUser } from "../../../interfaces/user.interface";

interface Props {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  goal: IGoal;
  setGoal: React.Dispatch<React.SetStateAction<IGoal>>;
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const FormModal = ({
  isOpen,
  setOpen,
  goal,
  setGoal,
  user,
  setUser,
}: Props) => {
  const [activeTab, setActiveTab] = useState<
    "Personal Information" | "Set your goals"
  >("Personal Information");
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  return (
    <>
      <Button
        onClick={() => {
          setOpen(true);
        }}
        color="yellow"
      >
        {(isOpen ? "+ " : "") + "Edit your profile"}
      </Button>
      {isOpen && (
        <div className="profile-form-bg">
          <div className="profile-form-container">
            <div className="profile-form-header">
              <div className="profile-form-header">
                <img src="/person.png" alt="user" />
                <h3>Set your profile</h3>
              </div>
              <button
                onClick={() => setOpen(false)}
              >
                X
              </button>
            </div>
            <div className="profile-form-tabs">
              <button
                onClick={() => {
                  setActiveTab("Personal Information");
                }}
                className={
                  activeTab === "Personal Information"
                    ? "tab-switch-active"
                    : "tab-switch"
                }
              >
                Personal Information
              </button>
              <button
                onClick={() => {
                  setActiveTab("Set your goals");
                }}
                className={
                  activeTab === "Set your goals"
                    ? `tab-switch-active`
                    : "tab-switch"
                }
              >
                set your goals
              </button>
            </div>
            <div>
              <p className="color-red">{error}</p>
              <p className="color-green">{message}</p>
            </div>
            {activeTab === "Set your goals" ? (
              <GoalForm
                goal={goal}
                setGoal={setGoal}
                setOpen={setOpen}
                setError={setError}
                setMessage={setMessage}
              />
            ) : (
              <ProfileForm
                user={user}
                setUser={setUser}
                setOpen={setOpen}
                setError={setError}
                setMessage={setMessage}
              />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
