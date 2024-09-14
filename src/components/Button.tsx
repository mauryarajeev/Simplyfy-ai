import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa"; // Example icons

interface ButtonProps {
  text: string;
  onClick: () => void;
  width?: string;
  variant?: "edit" | "delete" | "default";
  icon?: React.ReactNode;
}
// Button component with customizable text, click handler, variant, and icon
const Button: React.FC<ButtonProps> = ({ text, onClick, variant = "default", icon }) => {
  const baseStyles = "flex items-center justify-center p-2 text-base font-medium uppercase rounded hover:shadow-md";
  // Styles based on button variant
  const variantStyles: Record<string, string> = {
    edit: "bg-green-500 text-white border-green-500",
    delete: "bg-red-500 text-white border-red-500",
    default: "bg-blue-500  text-white text-base"
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} border  whitespace-nowrap`}
    >
      {icon && <span className="mr-2 flex-shrink-0">{icon}</span>}
      <span className="flex-grow text-center">{text}</span>
    </button>
  );
};

export default Button;
