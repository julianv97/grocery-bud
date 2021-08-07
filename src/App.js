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
    if (item.length === 0) return;
    const newItem = { id: new Date().getTime().toString(), title: item };
    setList([...list, newItem]);
    setItem("");
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
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
    <main className="flex flex-col items-center justify-center min-h-screen	bg-gray-100">
      <section className="bg-gray-300 w-10/12 md:w-7/12 lg:w-5/12 py-10 flex flex-col items-center shadow-xl">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <h1 className="capitalize pb-4">grocery bud</h1>
          <div className="500 w-full px-6">
            <input
              type="text"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              className="border-2  w-10/12"
            />
            <button className="w-2/12 capitalize">add</button>
          </div>
        </form>

        {list.length > 0 && (
          <div>
            {/*Falta crear y pasar como prop a list: editItem, removeItem */}
            <List items={list} removeItem={removeItem} />
            <button onClick={clearList} className="capitalize">
              clear items
            </button>
          </div>
        )}
      </section>
      <footer>by Julián Vicente</footer>
    </main>
  );
}

export default App;
