import React from "react";

interface CirclesRangeProps {
  value: number | "unset";
  onChange: (value: number | "unset") => void;
  min?: number;
  max?: number;
}

export function CirclesRange({
  value,
  onChange,
  min = 1,
  max = 10,
}: CirclesRangeProps): JSX.Element {
  const circles = [];
  for (let i = min; i <= max; i++) {
    circles.push(i);
  }

  return (
    <div className="flex justify-between">
      {circles.map((i) => (
        <label key={i} className="block flex">
          <input
            className="invisible peer h-0 w-0"
            type="radio"
            value={i}
            checked={value === i}
            onChange={(e) => {
              onChange(Number(e.target.value));
            }}
          />
          <span className="rounded-full w-8 h-8 border border-purple-50 block peer-checked:bg-white" />
        </label>
      ))}
    </div>
  );
}
