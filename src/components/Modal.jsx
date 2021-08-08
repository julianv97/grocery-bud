import React, { useEffect } from "react";

function Modal({ type, msg, showModal, list }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showModal();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div>
      <h1> {msg} </h1>
    </div>
  );
}

export default Modal;
