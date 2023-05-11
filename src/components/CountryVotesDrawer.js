import * as React from "react";

export function CountryVotesDrawer({ country, onClose }) {
  // translate-x-full  transition-transform
  return (
    <aside className="absolute right-0 top-0 z-10 h-full w-1/3 overflow-visible rounded-md bg-background p-4 shadow-lg transition-all duration-500">
      {/*<div className="absolute left-0 top-0 -ml-6 flex h-full flex-col justify-center">*/}
      <button
        className="absolute right-full top-1/2 h-12 w-6 rounded-l-md bg-background pl-1 shadow-[-6px_2px_10px_-3px_rgba(0,0,0,0.1)]"
        type="button"
        onClick={onClose}
      >
        <svg
          className="mx-auto h-4 w-4"
          fill="none"
          stroke="grey"
          stroke-width="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          ></path>
        </svg>
      </button>
      {/*</div>*/}
      <h2 className="text-left font-semibold">{country}</h2>
    </aside>
  );
}
