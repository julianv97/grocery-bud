import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const List = ({ items, editItem, removeItem }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="flex py-4">
            <h3>{title}</h3>

            <div className="pl-6">
              <button type="button" onClick={() => editItem(id)}>
                <FaEdit />
              </button>

              <button
                type="button"
                onClick={() => removeItem(id)}
                className="px-2"
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
