import React from "react";
import "./Util.css";

interface Props {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  type: string;
  placeholder: string;
  required?: boolean;
  onChange?: () => void;
}
const Input = ({
  value,
  setValue,
  type,
  placeholder,
  required,
  onChange,
}: Props) => {
  const handleInputChange = (input: string) => {
    setValue(input);
  };
  return (
    <div className="input-container">
      <input
        id={`${placeholder}-input`}
        className="input"
        type={type}
        value={value}
        onChange={(event) => {
          handleInputChange(event.target.value);
          onChange?.();
        }}
        required={required}
      />
      <label
        htmlFor={placeholder}
        className={value === "" ? "placeholder" : "small-label"}
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
