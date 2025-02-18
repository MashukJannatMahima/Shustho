import React from "react";

const Button = ({ variant, children }) => {
  const baseStyle = "px-4 py-2 rounded-md transition";
  const variants = {
    ghost: "text-gray-700 hover:text-green-600",
    primary: "bg-green-500 text-white hover:bg-green-700",
  };

  return <button className={`${baseStyle} ${variants[variant]}`}>{children}</button>;
};

export { Button };
