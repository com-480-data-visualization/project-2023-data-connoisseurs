import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";
import { Dropdown } from "./Dropdown";

export const VoteDirection = {
  IN: "votes-in",
  OUT: "votes-out",
};

export const VoteType = {
  TELE: "votes-tele",
  JURY: "votes-jury",
};

export const ToggleGroupClass =
  "inline-flex rounded-md shadow-sm text-left mt-2 mx-2";
export const ToggleItemClass =
  "bg-white px-4 py-2 text-sm font-medium text-primary data-[state=on]:bg-primary data-[state=on]:text-white hover:bg-gray-100 hover:text-primary focus:z-10 first:rounded-l-lg last:rounded-r-lg ";

export function MapControls({ yearOptions, year, onSelectYear }) {
  const [direction, setDirection] = React.useState(VoteDirection.IN);
  const [type, setType] = React.useState(VoteType.TELE);

  return (
    <div className="absolute left-0 top-0 z-10 flex flex-col p-1 align-top">
      <Dropdown options={yearOptions} value={year} onSelect={onSelectYear} />
      <ToggleGroup.Root
        className={ToggleGroupClass}
        type="single"
        value={direction}
        onValueChange={setDirection}
      >
        <ToggleGroup.Item className={ToggleItemClass} value={VoteDirection.IN}>
          Votes In
        </ToggleGroup.Item>
        <ToggleGroup.Item className={ToggleItemClass} value={VoteDirection.OUT}>
          Votes Out
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <ToggleGroup.Root
        className={ToggleGroupClass}
        type="single"
        value={type}
        onValueChange={setType}
      >
        <ToggleGroup.Item className={ToggleItemClass} value={VoteType.TELE}>
          Tele
        </ToggleGroup.Item>
        <ToggleGroup.Item className={ToggleItemClass} value={VoteType.JURY}>
          Jury
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
