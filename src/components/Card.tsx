import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Button from "./Button";
import { FaEdit, FaTrash } from "react-icons/fa";
import { removeContact } from "../middleware/store";

const Card = ({ details }: any) => {
  const dispatch = useDispatch();

  // Determine the status
  const isActive = details.status === "Active"; // Adjust this based on your actual status logic

  return (
    <div
    className={`lg:w-[300px] w-[300px] border p-5 rounded shadow-md 
      ${isActive ? "border-l-4 border-l-green-500" : "border-l-4 border-l-red-500"} 
      border-t border-r border-b border-t-gray-300 border-r-gray-300 border-b-gray-300`}
  >
      <div className="flex items-center justify-between mb-3">
  <p className="text-base text-primary">
    {details.firstName} {details.lastName}
  </p>
  <div className={`flex items-center gap-2`}>
    <div
      className={`w-3 h-3 rounded-full ${isActive ? "bg-green-500" : "bg-red-500"}`}
    />
    <div
      className={`px-1 py-1 rounded-full fontS ${isActive ? "text-green-500" : "text-red-500"}`}
    >
         <p className="text-base font-semibold">
        {isActive ? 'Active' : 'Inactive'}
      </p>
    </div>
  </div>
</div>

      <div className="flex items-center justify-between gap-5 mt-5">
        <Link to="/contacts/edit" state={details} className="w-full">
          <Button
            text="Edit"
            onClick={() => console.log("Edit clicked")}
            variant="edit"
            icon={<FaEdit />}
          />
        </Link>

        <Button
          text="Delete"
          onClick={() => {
            dispatch(removeContact(details?.id));
          }}
          variant="delete"
          icon={<FaTrash />}
        />
      </div>
    </div>
  );
};

export default Card;
