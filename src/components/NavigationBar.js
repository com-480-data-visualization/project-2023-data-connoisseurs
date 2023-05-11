import * as React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import Logo from "../logo.svg";

function MenuLink({ href, isActive, id, children }) {
  return (
    <NavigationMenu.Link
      key={id}
      className={
        "transform decoration-secondary transition-colors duration-300 last:ml-6 hover:underline hover:underline-offset-8 " +
        (isActive ? "font-bold underline underline-offset-8" : "")
      }
      active={isActive}
      href={href}
    >
      {children}
    </NavigationMenu.Link>
  );
}

export function NavigationBar() {
  return (
    <header className="z-40 flex flex-row justify-between px-8 py-4 shadow-md">
      <div className="flex flex-row space-x-1">
        <img
          className="h-5 w-5 fill-black dark:fill-white"
          src={Logo}
          alt="Eurovision Logo"
        />
        <span className="font-bold">EUROVISION GRAPHS</span>
      </div>
      <NavigationMenu.Root>
        <NavigationMenu.List>
          <NavigationMenu.Item>
            <MenuLink isActive href="#">
              Votes
            </MenuLink>
            <MenuLink href="#">Polls</MenuLink>
          </NavigationMenu.Item>
          <NavigationMenu.Indicator />
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </header>
  );
}
