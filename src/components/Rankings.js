import {VictoryBar, VictoryChart, VictoryTheme} from "victory";
import * as React from "react";

export function Rankings({
                             data, handleClickCountry,}) {

    return (
        <div style={{ overflowX: "auto", maxWidth: "100%" }}>
            <VictoryChart theme={VictoryTheme.material} height={500}>
                <VictoryBar
                    horizontal
                    data={data.slice().reverse()}
                    x="country"
                    y="points"
                    labels={({ datum }) => datum.points}
                    sortKey="points"
                    sortOrder="ascending"
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
