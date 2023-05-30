import React from "react";
import "./PollsPage.css";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryLine,
  VictoryTheme,
} from "victory";
import { ToggleGroupClass, ToggleItemClass } from "../components/MapControls";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import "../components/DropdownMenu.css";

const data_per_year = [
  { country: 1, points: 1 },
  { country: 2, points: 2 },
  { country: 3, points: 3 },
  { country: 4, points: 4 },
  { country: 5, points: 5 },
  { country: 6, points: 6 },
  { country: 7, points: 7 },
  { country: 8, points: 8 },
  { country: 9, points: 10 },
  { country: 10, points: 12 },
];

export const PollSource = {
  Eurovisionworld: "Eurovisionworld",
  OGAE: "OGAE",
};

export function PollsPage() {
  const [pollSource, setPollSource] = React.useState(
    PollSource.Eurovisionworld
  );
  return (
    <div className="polls-page">
      <h1>POLLS</h1>
      <ToggleGroup.Root
        className={ToggleGroupClass}
        type="single"
        value={pollSource}
        onValueChange={setPollSource}
      >
        <ToggleGroup.Item
          className={ToggleItemClass}
          value={PollSource.Eurovisionworld}
        >
          Eurovisionworld
        </ToggleGroup.Item>
        <ToggleGroup.Item className={ToggleItemClass} value={PollSource.OGAE}>
          OGAE
        </ToggleGroup.Item>
      </ToggleGroup.Root>

      <div className="dropdown">
        <button className="dropbtn">Years</button>
        <div className="dropdown-content">
          <li>2016</li>
          <li>2017</li>
          <li>2018</li>
          <li>2019</li>
          <li>2021</li>
        </div>
      </div>

      <div className="two-column-layout">
        <div className="left-column">
          <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 5 }}>
            <VictoryAxis
              tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
              tickFormat={[
                "UA",
                "PL",
                "BE",
                "CZ",
                "FR",
                "FI",
                "NL",
                "IT",
                "SE",
                "GB",
              ]}
            />
            <VictoryBar
              horizontal
              data={data_per_year}
              x="country"
              y="points"
              labels={({ datum }) => datum.points}
            />
          </VictoryChart>
        </div>

        <div className="right-column">
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
      </div>
    </div>
  );
}
