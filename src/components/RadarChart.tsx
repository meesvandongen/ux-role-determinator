import { range } from "lodash-es";
import React from "react";

interface Category {
  name: string;
  key: string;
}

interface DataPointValues {
  [key: string]: number;
}

interface DataPoint {
  name: string;
  color: string;
  values: DataPointValues;
}

interface RadarChartProps {
  categories: Category[];
  dataPoints: DataPoint[];
  size: number;
}

function RadarShape({
  size,
  radarValues,
  ...rest
}: React.SVGProps<SVGPolygonElement> & {
  size: number;
  radarValues: number[];
}) {
  const radius = size / 2;

  const minValue = 1;
  const maxValue = 10;

  const numDistinctValues = maxValue - minValue;
  const stepSize = radius / numDistinctValues;

  const offset = Math.PI;
  const singleSliceAngle = (2 * Math.PI) / radarValues.length;

  return (
    <polygon
      points={radarValues
        .map((value, index) => {
          const start = index * singleSliceAngle + offset;
          const end = start + singleSliceAngle;

          const one = Math.sin(start) * value * stepSize;
          const two = Math.cos(start) * value * stepSize;
          const three = Math.sin(end) * value * stepSize;
          const four = Math.cos(end) * value * stepSize;

          return `${one},${two} ${three},${four}`;
        })
        .join(" ")}
      {...rest}
    />
  );
}

export function RadarChart({
  categories,
  dataPoints,
  size = 500,
}: RadarChartProps): JSX.Element {
  const dataPointValuesAsArrays = dataPoints.map((dataPoint) => ({
    ...dataPoint,
    values: categories.map((category) => dataPoint.values[category.key]),
  }));

  const radius = size / 2;

  const minValue = 1;
  const maxValue = 10;

  return (
    <div>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <g transform={`translate(${radius},${radius})`}>
          {range(minValue, maxValue, 1).map((i) => {
            return (
              <RadarShape
                key={i}
                radarValues={categories.map(() => i)}
                size={size}
                fill="transparent"
                stroke="#ccc"
                strokeWidth="1"
              />
            );
          })}

          {dataPointValuesAsArrays.map((dataPoint) => {
            const { name, color, values } = dataPoint;

            return (
              <g
                key={name}
                style={{
                  filter: "drop-shadow(0 0 15px rgb(0 0 0 / .4))",
                }}
              >
                <RadarShape
                  radarValues={values}
                  size={size}
                  fill={color}
                  stroke="#fff"
                  strokeWidth="3"
                />
              </g>
            );
          })}
          {/* <circle
            cx="0"
            cy="0"
            r={radius}
            fill="transparent"
            stroke="#ccc"
            strokeWidth="1"
          /> */}
        </g>
      </svg>
    </div>
  );
}
