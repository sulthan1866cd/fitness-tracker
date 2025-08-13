import React from "react";
import "./Util.css";

interface Props {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  type: string;
  placeholder: string;
  required?: boolean;
}
const Input = ({ value, setValue, type, placeholder, required }: Props) => {
  const handleInputChange = (input: string) => {
    setValue(input);
  };
  return (
    <div className="input-container">
      <input
        className="input"
        type={type}
        value={value}
        onChange={(event) => handleInputChange(event.target.value)}
        required={required}
      />
      <label className={value===''?'placeholder':'small-label'}>{placeholder}</label>
    </div>
  );
};

export default Input;
