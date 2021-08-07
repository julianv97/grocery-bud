import React, { useState, useEffect } from "react";
import List from "./components/List";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

function App() {
  const [item, setItem] = useState("");
  const [list, setList] = useState(getLocalStorage());

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { id: new Date().getTime().toString(), title: item };
    setList([...list, newItem]);
  };

  const clearList = () => {
    setList([]);
  };

  //Cuando elimino un item o la lista entera, con el Effect le paso al localStorage la nueva list para que se actualice.

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  console.log(list);

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="capitalize">grocery bud</h1>
        <div>
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="bg-blue-500"
          />
          <button>add</button>
        </div>
      </form>

      {list.length > 0 && (
        <div>
          {/*Falta crear y pasar como prop a list: editItem, removeItem */}
          <List items={list} />
          <button onClick={clearList}>clear items</button>
        </div>
      )}
    </section>
  );
}

export default App;
