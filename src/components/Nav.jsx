import React from "react";
import useDarkMode from "../customHooks/useDarkMode";
import { BsMoon, BsSun } from "react-icons/bs";

function Nav() {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <div>
      <span
        onClick={() => {
          setTheme(colorTheme);
          console.log("entra");
        }}
        className="cursor-pointer dark:text-white  transition duration-500 text-2xl"
      >
        {colorTheme === "light" ? <BsMoon /> : <BsSun />}
      </span>
    </div>
  );
}

export default Nav;
