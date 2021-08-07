import React from "react";

const List = ({ items }) => {
  return (
    <div>
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article key={id} className="flex">
            <h3>{title}</h3>

            <div className="pl-6">
              <button>edit</button>
              <button className="px-2">eliminar</button>
            </div>
            
          </article>
        );
      })}
    </div>
  );
};

export default List;
