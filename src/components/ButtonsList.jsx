import React from "react";

import { FaEdit, FaTrash } from "react-icons/fa";

function ButtonsList({ isHidden, editItem, removeItem, id }) {
  return (
    <div
      className={
        isHidden
          ? "origin-center transform scale-0 duration-300"
          : "origin-center pl-6 w-2/12 h-8 transform scale-1 duration-300 flex flex-col md:flex-row justify-between items-center"
      }
    >
      <button type="button" onClick={() => editItem(id)}>
        <FaEdit className="text-gray-600 dark:text-gray-200  text-sm " />
      </button>

      <button type="button" onClick={() => removeItem(id)} className="px-2">
        <FaTrash className="text-gray-600 dark:text-gray-200 text-sm" />
      </button>
    </div>
  );
}

export default ButtonsList;
