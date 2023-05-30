import React from "react";
import * as Select from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";

export const Dropdown = ({ options, value, onSelect }) => (
  <Select.Root value={value} onValueChange={onSelect}>
    <Select.Trigger className="inline-flex h-[35px] w-24 items-center justify-center gap-[5px] rounded bg-primary px-[15px] text-[13px] leading-none text-white shadow-[0_2px_10px] shadow-black/10 outline-none focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-primary">
      <Select.Value />
      <Select.Icon className="text-white">
        <ChevronDownIcon />
      </Select.Icon>
    </Select.Trigger>
    <Select.Content
      className="-ml-2 rounded-md bg-white shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]"
      position="popper"
    >
      <Select.Viewport>
        {options.map(({ value, label }) => (
          <MenuItem value={value} label={label} />
        ))}
      </Select.Viewport>
    </Select.Content>
  </Select.Root>
);

const MenuItem = ({ label, value }) => {
  return (
    <Select.Item
      key={value}
      value={value}
      className="relative flex h-[25px] select-none items-center rounded-[3px] pl-[25px] pr-[35px] text-[13px] leading-none text-primary data-[disabled]:pointer-events-none data-[highlighted]:bg-primary data-[disabled]:text-mauve8 data-[highlighted]:text-primary data-[highlighted]:text-white data-[highlighted]:outline-none"
    >
      <Select.ItemText>{label}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 inline-flex w-[25px] items-center justify-center">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
};
