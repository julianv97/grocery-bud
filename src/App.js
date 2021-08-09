import React, { useState, useEffect } from "react";
import List from "./components/List";
import Modal from "./components/Modal";
import { BsMoon, BsSun } from "react-icons/bs";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};

/* const lightThemeStyles = {
  
} */

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState(getLocalStorage());
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [modal, setModal] = useState({ show: false, msg: "", type: "" });
  /* const [theme, setTheme] = useState('light-theme') */

  const handleSubmit = (e) => {
    e.preventDefault();
    //Si no se ingresa nada
    if (!name) {
      showModal(true, "please enter value", "danger");
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      setName("");
      setEditId(null);
      setIsEditing(false);
      showModal(true, "value changed", "succes");
    } else {
      showModal(true, "item added to the list", "succes");
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
      setEditId(null);
    }
  };

  const editItem = (id) => {
    const itemToEdit = list.find((item) => item.id === id);
    setName(itemToEdit.title);
    setEditId(id);
    setIsEditing(true);
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    //Aca tengo que limpiar el edit, para cuando se esté editando algo pero se decida eliminar el item
    setName("");
    /* setIsEditing(false);
    setEditId(null); */
    clearEditState();
    showModal(true, "item removed", "danger");
  };

  const clearList = () => {
    setList([]);
    setName("");
    //Aca tengo que limpiar el edit, para cuando se esté editando algo pero se decida eliminar el item
    /* setIsEditing(false);
    setEditId(null); */
    clearEditState();
    showModal(true, "empty list", "danger");
  };

  const clearEditState = () => {
    setIsEditing(false);
    setEditId(null);
  };

  const showModal = (show = false, msg = "", type = "") => {
    setModal({ show, msg, type });
  };

  //Cuando elimino un item o la lista entera, con el Effect le paso al localStorage la nueva list para que se actualice.
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  console.log(list);

  return (
    <div className="bg-gray-100 flex flex-col items-center ">
      <header className="fixed w-full p-6 flex justify-end items-center">
        <button>
          <BsMoon />
          <BsSun />
        </button>
      </header>
      <main className="flex flex-col  items-center justify-center min-h-screen w-11/12  bg-gray-100 ">
        {modal.show && <Modal {...modal} showModal={showModal} list={list} />}
        <section className="bg-light-gray w-11/12 md:w-7/12 lg:w-5/12 py-10 flex flex-col items-center rounded-md shadow-xl">
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center"
          >
            <h1 className="capitalize pb-4 text-light-primary text-2xl font-semibold">
              grocery bud
            </h1>
            <div className=" w-full px-6">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-gray-200 w-9/12 md:w-10/12 focus:border-blue-300 rounded-l-lg text-light-black outline-none"
              />
              <button className="w-3/12 md:w-2/12 capitalize text-light-primary font-semibold hover:bg-light-primary hover:text-dark-gray transition ease-in duration-300 rounded-r-lg">
                {isEditing ? "edit" : "add item"}
              </button>
            </div>
          </form>

          {list.length > 0 && (
            <div className="w-full flex flex-col">
              {/*Falta crear y pasar como props a list: editItem */}
              <List items={list} editItem={editItem} removeItem={removeItem} />
              <div className="w-full flex items-center justify-center">
                <button
                  onClick={clearList}
                  className="capitalize text-red-500 font-semibold hover:bg-red-500 hover:text-dark-gray w-4/12 transition ease-in duration-200 rounded-lg"
                >
                  clear items
                </button>
              </div>
            </div>
          )}
        </section>

        <footer className="text-light-black text-md">by Julián Vicente</footer>
      </main>
    </div>
  );
}

export default App;
