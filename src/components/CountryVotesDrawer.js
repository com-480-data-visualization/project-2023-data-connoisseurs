import * as React from "react";

export function CountryVotesDrawer({ country, onClose }) {
  // translate-x-full  transition-transform
  return (
    <aside className="absolute right-0 top-0 z-10 h-full w-1/3 overflow-visible rounded-md bg-background p-4">
      <div className="absolute left-0 top-0 -ml-6 flex h-full flex-col justify-center">
        <button
          className="rounded-md bg-background"
          type="button"
          data-drawer-hide="drawer-right-example"
          aria-controls="drawer-right-example"
        >
          <svg
            className="h-10 w-10 p-3"
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
              d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
            ></path>
          </svg>
        </button>
      </div>

      <h2 className="text-left font-semibold">{country}</h2>
    </aside>
  );
}
