import { ResponsiveRadar } from "@nivo/radar";
import React from "react";

export function CustomRadar(
  props: React.ComponentProps<typeof ResponsiveRadar>
): JSX.Element {
  return (
    <ResponsiveRadar
      margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
      curve="cardinalClosed"
      gridLevels={5}
      gridShape="circular"
      isInteractive={true}
      enableDots
      legends={[
        {
          anchor: "top-left",
          direction: "column",
          translateX: -50,
          translateY: -40,
          itemWidth: 80,
          itemHeight: 20,
          itemTextColor: "#999",
          symbolSize: 12,
          symbolShape: "circle",
          effects: [
            {
              on: "hover",
              style: {
                itemTextColor: "#000",
              },
            },
          ],
        },
      ]}
      {...props}
    />
  );
}
