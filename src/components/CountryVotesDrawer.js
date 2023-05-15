import * as React from "react";

import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from "victory";

const data = [
    {country: 1, points: 1},
    {country: 2, points: 2},
    {country: 3, points: 3},
    {country: 4, points: 4},
    {country: 5, points: 5},
    {country: 6, points: 6},
    {country: 7, points: 7},
    {country: 8, points: 8},
    {country: 9, points: 10},
    {country: 10, points: 12}
];

export function CountryVotesDrawer({ isOpen, country, onToggle }) {
  const DrawerClass =
    "absolute right-0 top-0 z-10 h-full w-1/3 overflow-visible rounded-l-2xl bg-background p-4 shadow-lg transition-transform duration-500 ";

  return (
    <aside className={DrawerClass + (isOpen ? "" : "translate-x-full")}>
      <button
        className="absolute right-full top-1/2 h-12 w-6 rounded-l-md bg-background pl-1 shadow-[-6px_2px_10px_-3px_rgba(0,0,0,0.1)]"
        type="button"
        onClick={onToggle}
      >
        <svg
          className="mx-auto h-4 w-4"
          fill="none"
          stroke="grey"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d={
              isOpen
                ? "M8.25 4.5l7.5 7.5-7.5 7.5"
                : "M15.75 19.5L8.25 12l7.5-7.5"
            }
          ></path>
        </svg>
      </button>
      <h2 className="text-left font-semibold">{country}</h2>
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={{x:5}}
        >
            <VictoryAxis
                tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                tickFormat={["UA", "PL", "BE", "CZ", "FR", "FI", "NL", "IT", "SE", "GB"]}
            />
            <VictoryBar horizontal
                        data={data}
                        x="country"
                        y="points"
                        labels={({ datum }) => datum.points}
            />
        </VictoryChart>
    </aside>
  );
}