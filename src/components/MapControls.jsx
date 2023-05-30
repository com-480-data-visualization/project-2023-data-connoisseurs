import * as React from "react";
import { Dropdown } from "./Dropdown";
import { Toggle } from "./Toggle";

export function MapControls({
  year,
  yearOptions,
  onSelectYear,
  direction,
  directionOptions,
  onSelectDirection,
  type,
  typeOptions,
  onSelectType,
}) {
  return (
    <div className="absolute left-0 top-0 z-10 flex flex-row pt-1 align-top">
      <Dropdown value={year} options={yearOptions} onSelect={onSelectYear} />
      <Toggle
        value={direction}
        options={directionOptions}
        onSelect={onSelectDirection}
      />
      <Toggle value={type} options={typeOptions} onSelect={onSelectType} />
    </div>
  );
}
