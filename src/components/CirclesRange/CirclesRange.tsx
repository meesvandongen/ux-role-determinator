import range from "lodash-es/range";
import React, { useMemo, useState } from "react";
import * as S from "./circle-range.styles";

interface CirclesRangeProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

interface Circle {
  index: number;
  checked: boolean;
  delay: number;
}

export function CirclesRange({
  value,
  onChange,
  min = 1,
  max = 10,
}: CirclesRangeProps) {
  const [previousValue, setPreviousValue] = useState(value);

  if (previousValue !== value) {
    setPreviousValue(value);
  }

  const circles = useMemo(() => {
    return range(min, max).map((i): Circle => {
      const delay = Math.abs(previousValue - i) * 50;

      return {
        index: i,
        checked: value >= i,
        delay,
      };
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [max, min, value]);

  return (
    <div className="flex justify-between">
      {circles.map(({ index, checked, delay }) => (
        <label key={index} className="flex cursor-pointer">
          <input
            className="invisible peer h-0 w-0"
            type="checkbox"
            value={index}
            checked={checked}
            onChange={(e) => {
              onChange(Number(e.target.value));
            }}
          />
          <S.Circle checked={checked} index={delay} />
        </label>
      ))}
    </div>
  );
}
