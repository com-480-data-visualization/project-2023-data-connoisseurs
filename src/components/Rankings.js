import {VictoryAxis, VictoryBar, VictoryChart} from "victory";
import * as React from "react";

export function Rankings({
                             data, handleClickCountry,}) {

    return (
        <div style={{ overflowX: "auto", maxWidth: "100%" }}>
            <VictoryChart height={data? data.length * 10 : 300}>
                <VictoryAxis
                    style={{
                        tickLabels: { fontSize: 9, fill: "#000000" },
                    }}
                />
                <VictoryBar
                    horizontal
                    data={data.slice().reverse()}
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
                            fontSize: 9,
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
    )
}
