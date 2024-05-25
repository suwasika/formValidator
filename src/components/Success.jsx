import React from "react";
import { useLocation } from "react-router-dom";
import "./Success.css";

const Success = () => {
  const { state } = useLocation();

  return (
    <div className="success">
      <h1>Form Submitted Successfully</h1>
      <div className="details">
        {Object.keys(state).map((key) => (
          <p key={key}>
            <strong>{key}: </strong>
            {state[key]}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Success;
