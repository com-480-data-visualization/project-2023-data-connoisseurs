import * as React from "react";
import Logo from "../logo.svg";

export function NavigationBar() {
  return (
    <header className="flex flex-row justify-between px-8 py-4">
      <div className="flex flex-row space-x-1">
        <img
          className="h-5 w-5 fill-black dark:fill-white"
          src={Logo}
          alt="Eurovision Logo"
        />
        <span className="font-bold">EUROVISION GRAPHS</span>
      </div>
      <div>
        <button>Votes</button>
        <button>Polls</button>
      </div>
    </header>
  );
}
