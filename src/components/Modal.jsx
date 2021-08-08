import React, { useEffect } from "react";

function Modal({ type, msg, showModal, list }) {
  console.log(type);
  useEffect(() => {
    const timeout = setTimeout(() => {
      showModal();
    }, 2000);
    return () => clearTimeout(timeout);
  }, [list]);

  return (
    <div>
      <p
        className={
          type === "danger"
            ? "text-red-600 bg-red-200"
            : "text-green-600 bg-green-200"
        }
      >
        {" "}
        {msg}{" "}
      </p>
    </div>
  );
}

export default Modal;
