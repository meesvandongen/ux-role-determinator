import React, {useEffect, useState} from "react";
import * as S from './circle-range.styles';

interface CirclesRangeProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

interface Circles {
  index: number,
  checked: boolean,
  delay: number,
}

enum Direction {
  FORWARD = 'forward',
  REVERSED = 'reversed'
}

export function CirclesRange({
  value,
  onChange,
  min = 1,
  max = 10,
}: CirclesRangeProps) {
  const [circles, setCircles] = useState<Circles[]>([]);
  let direction: Direction = Direction.FORWARD;

  useEffect(() => {
    let newCircles: Circles[] = [];
    let newCheckedCircles: Circles[] = [];
    let previousCheckedCircles: Circles[] = [];

    if (circles) {
      previousCheckedCircles = circles.filter((circle) => {
        return circle.checked;
      });
    }

    for (let i = min; i <= max; i++) {
      newCircles.push({
        index: i,
        checked: value >= i,
        delay: 0,
      });
    }

    newCheckedCircles = newCircles.filter((circle) => {
      return circle.checked;
    });

    direction = newCheckedCircles.length >= previousCheckedCircles.length ? Direction.FORWARD : Direction.REVERSED;

    newCircles.map((circle) => {
      if (direction === Direction.FORWARD) {
        circle.delay = circle.index * 50;
      }
      if (direction === Direction.REVERSED) {
        circle.delay = (newCircles.length * 50) - circle.index * 50;
      }
    });

    setCircles(newCircles);
  }, [onChange]);

  return (
    <div className="flex justify-between">
      {circles.map(({index, checked, delay}) => (
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
