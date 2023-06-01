import * as React from "react";
import {Dropdown} from "./Dropdown";
import {Toggle} from "./Toggle";

export function RankingControl({
    year,
    yearOptions,
    onSelectYear,
    pollSource,
    pollSourceOptions,
    onSelectPollSource,
}) {
    return (
        <div className="absolute left-0 top-0 z-10 flex flex-row pt-1 align-top">
            <Dropdown value={year} options={yearOptions} onChange={onSelectYear} />
            <Toggle
                value={pollSource}
                options={pollSourceOptions}
                onSelect={onSelectPollSource}
            />
        </div>
    );
}
