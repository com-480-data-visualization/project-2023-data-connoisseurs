import {VictoryAxis, VictoryBar, VictoryChart} from "victory";
import * as React from "react";
import {PollSource} from "../pages/PollsPage";

export function Rankings({
                             data,
                             countries,
                             pollSource,
                             handleClickCountry,}) {
    const textDisplay = (
        <h5 style={{marginTop: "40px"}}>
            {`${pollSource === PollSource.Eurovisionworld ? "Eurovisionworld rankings: shows number of votes received by each country" : 
                "OGAE rankings: shows number of points received by each country"} `}
        </h5>
    )

    const instructionDisplay = (
        <h5 style={{ marginTop: "4px" }}>
            {`click on a country to see how its placement in the poll has changed over time`}
        </h5>
    )

    return (
        <div style={{ overflowX: "auto", maxWidth: "100%" , marginLeft: "0px"}}>
            <div style={{ marginBottom: "0px", paddingLeft: "8px" }}>
                {textDisplay}
                {instructionDisplay}
            </div>
            <div style={{paddingLeft: "80px"}}>
                <VictoryChart height={data? data.length * 10 : 300} padding={{ left: 100, right: 100, top: 20, bottom: 40 }}>
                    <VictoryAxis
                        style={{
                            tickLabels: { fontSize: 10, fill: "#000000" },
                        }}
                    />
                    <VictoryBar
                        horizontal
                        data={data.slice().reverse()}
                        x={(datum) => `${countries.find(country => country[0] === datum.country)[1]}`}
                        y="points"
                        labels={({ datum }) => datum.points}
                        sortKey="points"
                        sortOrder="ascending"
                        style={{
                            data: {
                                fill: "#0043FF",
                            },
                            labels: {
                                fontSize: 5,
                                fill: "#000000",
                            },
                        }}
                        events={[
                            {
                                target: "data",
                                eventHandlers: {
                                    onClick: () => {
                                        return [ {
                                            target: "data",
                                            mutation: (props) => {
                                                handleClickCountry(props.datum.country);
                                            }
                                        }]
                                    }
                                }
                            },
                        ]}
                    />
                </VictoryChart>
            </div>
        </div>
    )
}
