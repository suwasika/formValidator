import { useState } from "react";
import "./formInput.css";

const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { label, errorMessage, onChange, id, error, ...inputProps } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <div className="inputWrapper">
        <input
          {...inputProps}
          type={inputProps.type === "password" && showPassword ? "text" : inputProps.type}
          onChange={onChange}
          onBlur={handleFocus}
          onFocus={() => inputProps.name === "confirmPassword" && setFocused(true)}
          focused={focused.toString()}
        />
        {inputProps.type === "password" && (
          <button type="button" className="showHideBtn" onClick={togglePasswordVisibility}>
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      <span>{error || errorMessage}</span>
    </div>
  );
};

export default FormInput;
