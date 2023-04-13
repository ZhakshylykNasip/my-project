import React from "react";
import "./Button.css";
export const Button = ({ children, bgColor, color, width, height ,onClick}) => {
  return (
    <button
      className="button"
      style={{
        backgroundColor: `${bgColor}`,
        color: `${color}`,
        width: `${width}`,
        height: `${height}`,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
