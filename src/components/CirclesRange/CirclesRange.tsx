import React from "react";
import * as S from './circle-range.styles';

interface CirclesRangeProps {
  value: number;
  onChange: (value: number) => void;
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
        <label key={i} className="flex cursor-pointer">
          <input
            className="invisible peer h-0 w-0"
            type="checkbox"
            value={i}
            checked={value === i}
            onChange={(e) => {
              onChange(Number(e.target.value));
            }}
          />
          <S.Circle checked={value >= i} index={i} />
        </label>
      ))}
    </div>
  );
}
