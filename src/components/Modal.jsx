import React, { useEffect } from "react";

function Modal({ type, msg, showModal, list }) {
  console.log(type);
  useEffect(() => {
    const timeout = setTimeout(() => {
      showModal();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list, showModal]);

  return (
    <div className="bg-gray-400 dark:bg-light-black rounded-lg w-11/12 md:w-8/12 lg:w-6/12 flex items-center justify-center mb-4">
      <p className="capitalize text-gray-900 font-semibold dark:text-gray-200">{msg}</p>
    </div>
  );
}

export default Modal;
