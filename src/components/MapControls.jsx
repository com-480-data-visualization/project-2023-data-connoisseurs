import * as React from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const VoteDirection = {
  IN: "votes-in",
  OUT: "votes-out",
};

export const VoteType = {
  TELE: "votes-tele",
  JURY: "votes-jury",
};

export function MapControls() {
  const [direction, setDirection] = React.useState(VoteDirection.IN);
  const [type, setType] = React.useState(VoteType.TELE);

  return (
    <div className="absolute left-0 top-0 z-50 flex flex-col">
      <ToggleGroup.Root
        className=""
        type="single"
        value={direction}
        onValueChange={setDirection}
      >
        <ToggleGroup.Item className="" value={VoteDirection.IN}>
          Votes In
        </ToggleGroup.Item>
        <ToggleGroup.Item className="" value={VoteDirection.OUT}>
          Votes Out
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <ToggleGroup.Root
        className=""
        type="single"
        value={type}
        onValueChange={setType}
      >
        <ToggleGroup.Item className="" value={VoteType.TELE}>
          Tele
        </ToggleGroup.Item>
        <ToggleGroup.Item className="" value={VoteType.JURY}>
          Jury
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
