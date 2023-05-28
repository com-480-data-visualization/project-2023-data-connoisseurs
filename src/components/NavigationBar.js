import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Logo from "../logo.svg";
import { useLocation } from "react-router-dom";
import { Path } from "../App";

export function NavigationBar() {
  const linkClass = (path) =>
    "transform decoration-secondary transition-colors duration-300 last:ml-6 hover:underline hover:underline-offset-8 " +
    (location.pathname === path
      ? "font-bold underline underline-offset-8"
      : "");

  const location = useLocation();

  return (
    <header className="z-40 flex flex-row justify-between px-8 py-4 shadow-md">
      <a className="flex flex-row space-x-1" href="/">
        <img
          className="h-5 w-5 fill-black dark:fill-white"
          src={Logo}
          alt="Eurovision Logo"
        />
        <span className="font-bold">VOTING GRAPHS</span>
      </a>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <NavigationMenu.Link
              className={linkClass(Path.Votes)}
              href={Path.Votes}
            >
              Votes
            </NavigationMenu.Link>
            <NavigationMenu.Link
              className={linkClass(Path.Polls)}
              href={Path.Polls}
            >
              Polls
            </NavigationMenu.Link>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator />
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
}
