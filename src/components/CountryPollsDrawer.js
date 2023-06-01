import {VictoryAxis, VictoryChart, VictoryLabel, VictoryLine, VictoryTheme} from "victory";
import React from "react";

export function CountryPollsDrawer({
    data,
    isOpen,
    handleToggle,
    country,}) {

    const DrawerClass =
        "absolute right-0 top-0 z-10 h-full w-1/3" +
        " overflow-visible rounded-l-2xl  bg-background p-4 shadow-lg" +
        " transition-transform duration-500";

    const lineChart = (
        <div className="my-2">
            <VictoryChart theme={VictoryTheme.material}>
                <VictoryAxis
                    tickValues={[2016, 2017, 2018, 2019, 2021]}
                    tickFormat={["2016", "2017", "2018", "2019", "2021"]}
                />
                <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
                <VictoryLine
                    style={{
                        data: { stroke: "#c43a31" },
                        parent: { border: "1px solid #ccc" },
                    }}
                    domain={{ x: [2015, 2022], y: [1, 12] }}
                    data={[
                        { x: 2016, y: 4 },
                        { x: 2017, y: 8 },
                        { x: 2018, y: 6 },
                        { x: 2019, y: 3 },
                        { x: 2021, y: 10 },
                    ]}
                    labels={({ datum }) => datum.y}
                    labelComponent={<VictoryLabel renderInPortal dy={-10} />}
                />
            </VictoryChart>
        </div>
    );

    return (
        <aside className={DrawerClass + (isOpen ? " ": " translate-x-full")}>
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
            <h1 className="text-left text-xl font-bold">{country}</h1>
            {data ? lineChart : <h5 className="text-left text-sm">No data</h5>}
        </aside>
    );
}
