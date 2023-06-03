import * as React from "react";
import {VoteDirection, VoteType} from "../pages/VotesPage";
import {VictoryAxis, VictoryBar, VictoryChart} from "victory";

/**
 *
 * @param data: [{country: "CH", points: 6}, ...]
 * @param direction
 * @param type
 * @param isOpen
 * @param country
 * @param handleToggle
 * @returns {JSX.Element}
 * @constructor
 */
export function CountryVotesDrawer({
  data,
  direction,
  type,
  isOpen,
  country,
  handleToggle,
}) {

  const DrawerClass =
    "absolute right-0 top-0 z-10 h-full w-1/3" +
    " overflow-visible rounded-l-2xl  bg-background p-4 shadow-lg" +
    " transition-transform duration-500";

  const NoData = (
    <h5 className="text-left text-sm">
      {`No ${type === VoteType.TELE ? "tele" : "jury"} votes
		${direction === VoteDirection.IN ? "received" : "cast"}`}
    </h5>
  );

  const smallBarChart = (
      <VictoryChart>
          <VictoryAxis
              style={{
                  tickLabels: {fontSize: 14, fill: "#000000"},
              }}/>
          <VictoryBar
              horizontal
              barRatio={0.5}
              data={data}
              x="country"
              y="points"
              labels={({ datum }) => datum.points}
              sortKey="points"
              sortOrder="ascending"
              style={{
                  data: {
                      fill: "#0043FF",
                  },
                  labels: {
                      fontSize: 14,
                      fill: "#000000",
                  }
              }}
              height={data? data.length * 15 : 300}
          />
      </VictoryChart>
  );

  const bigBarChart = (
      <VictoryChart height={data? data.length * 15 : 300}>
          <VictoryAxis
              style={{
                  tickLabels: {fontSize: 14, fill: "#000000"},
              }}/>
          <VictoryBar
              height={data? data.length * 15 : 300}
              horizontal
              barRatio={0.5}
              data={data}
              x="country"
              y="points"
              labels={({ datum }) => datum.points}
              sortKey="points"
              sortOrder="ascending"
              style={{
                  data: {
                      fill: "#0043FF",
                  },
                  labels: {
                      fontSize: 14,
                      fill: "#000000",
                  }
              }}
          />
      </VictoryChart>
  );

    const BarChart = (
        <div className="my-0 mt-0">
            <h5 className="text-left text-sm">{`${
                direction === VoteDirection.IN ? "Received" : "Cast"
            }
        ${type === VoteType.TELE ? "tele" : "jury"} votes by countries:`}</h5>

            <div style={{ marginTop: 0, paddingTop: 0 }}>
                {data && data.length > 24 ? bigBarChart : smallBarChart}
            </div>
        </div>
    );


  return (
    <aside className={DrawerClass + (isOpen ? "" : " translate-x-full")}>
      <button
        className="absolute right-full top-1/2 h-12 w-6 rounded-l-md bg-background pl-1 shadow-[-6px_2px_10px_-3px_rgba(0,0,0,0.1)]"
        type="button"
        onClick={handleToggle}
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
      <h1 className="text-left text-lg font-bold">{country}</h1>
      {data && data.length > 0 ? BarChart : NoData}
    </aside>
  );
}
