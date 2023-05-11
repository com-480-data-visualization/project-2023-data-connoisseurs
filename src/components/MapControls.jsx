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
  const toggleGroupItemClasses =
    "hover:bg-violet3 color-mauve11 data-[state=on]:bg-violet6 data-[state=on]:text-violet12 flex h-[35px] w-[35px] items-center justify-center bg-white text-base leading-4 first:rounded-l last:rounded-r focus:z-10 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none";

  const [direction, setDirection] = React.useState(VoteDirection.IN);
  const [type, setType] = React.useState(VoteType.TELE);

  return (
    <div className="absolute left-0 top-0 z-50 flex flex-col">
      <ToggleGroup.Root
        className="bg-mauve6 shadow-blackA7 inline-flex space-x-px rounded shadow-[0_2px_10px]"
        type="single"
        value={direction}
        onValueChange={setDirection}
      >
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value={VoteDirection.IN}
        >
          Votes In
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value={VoteDirection.OUT}
        >
          Votes Out
        </ToggleGroup.Item>
      </ToggleGroup.Root>
      <ToggleGroup.Root
        className="bg-mauve6 shadow-blackA7 inline-flex space-x-px rounded shadow-[0_2px_10px]"
        type="single"
        value={type}
        onValueChange={setType}
      >
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value={VoteType.TELE}
        >
          Tele
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={toggleGroupItemClasses}
          value={VoteType.JURY}
        >
          Jury
        </ToggleGroup.Item>
      </ToggleGroup.Root>
    </div>
  );
}
