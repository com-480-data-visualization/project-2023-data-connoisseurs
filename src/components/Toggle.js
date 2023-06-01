import * as React from "react";
import { useCallback } from "react";
import * as ToggleGroup from "@radix-ui/react-toggle-group";

export const ToggleGroupClass = "inline-flex shadow-sm text-left mx-0.5";
export const ToggleItemClass =
  "bg-white px-4 py-2 text-sm font-medium text-primary" +
  " data-[state=on]:bg-primary data-[state=on]:text-white hover:bg-gray-100" +
  " hover:text-primary focus:z-10 first:rounded-l-md last:rounded-r-md ";

export function Toggle({ options, value, onSelect }) {
  const handleSelect = useCallback(
    (value) => value && onSelect(value),
    [onSelect]
  );

  return (
    <ToggleGroup.Root
      className={ToggleGroupClass}
      type="single"
      value={value}
      onValueChange={handleSelect}
    >
      {options.map(({ value, label }) => (
        <ToggleGroup.Item className={ToggleItemClass} key={value} value={value}>
          {label}
        </ToggleGroup.Item>
      ))}
    </ToggleGroup.Root>
  );
}
