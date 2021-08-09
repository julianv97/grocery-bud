import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, editItem, removeItem }) => {
  return (
    <div className="py-6">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="flex py-3 justify-between px-10 border-b">
            <h3 className="text-gray-900 text-sm capitalize font-semibold">{title}</h3>

            <div className="pl-6">
              <button type="button" onClick={() => editItem(id)}>
                <FaEdit className="text-green-700 text-sm"/>
              </button>

              <button
                type="button"
                onClick={() => removeItem(id)}
                className="px-2"
              >
                <FaTrash className="text-red-700 text-sm"/>
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
