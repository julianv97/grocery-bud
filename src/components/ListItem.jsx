  
import React, { useState } from "react";
import ButtonsList from "./ButtonsList";
function ListItem({ title, editItem, removeItem, id }) {
  const [isHidden, setIsHidden] = useState(true);

  const handleMouseEnter = (e) => {
    setIsHidden(false);
  };

  const handleMouseLeave = (e) => {
    setIsHidden(true);
  };
  return (
    <article
      className="flex py-6 w-full items-center justify-between px-10 border-b max-h-10 transform scale-1  "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h3 className="text-gray-900 text-sm capitalize font-semibold">
        {title}
      </h3>
      <ButtonsList
        isHidden={isHidden}
        editItem={editItem}
        removeItem={removeItem}
        id={id}
      />
    </article>
  );
}

export default ListItem;