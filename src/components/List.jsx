import React from "react";

import ListItem from "./ListItem";

const List = ({ items, editItem, removeItem }) => {


  return (
    <div className="py-6">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <article className="">
            <ListItem
              key={id}
              title={title}
              editItem={editItem}
              removeItem={removeItem}
              id={id}
            />
          </article>
        );
      })}
    </div>
  );
};

export default List;