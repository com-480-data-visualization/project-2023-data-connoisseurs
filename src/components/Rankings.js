import {VictoryBar, VictoryChart, VictoryTheme} from "victory";
import * as React from "react";
import {useCallback} from "react";

export function Rankings({
                             data, handleClickCountry,}) {

    const handleClick = useCallback((event, barData) => {
        const selectedDatum = barData.find((datum) => datum._x === event.datum._x);
        if (selectedDatum) {
            handleClickCountry(selectedDatum.country);
        }
    })

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
                                onClick: handleClick,
                            },
                        },
                    ]}
                />
            </VictoryChart>
        </div>
    )
}
