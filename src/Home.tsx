import React from "react";
import { Link } from "react-router-dom";
import { RadarChart } from "./components/RadarChart";

export function Home(): JSX.Element {
  return (
    <div>
      <div className="flex flex-col place-items-center bg-[rgb(17,11,25)] py-16">
        <h1 className="text-gray-50">Kennis Matrix</h1>
        <RadarChart
          categories={[
            { name: "UX Writing", key: "ux-writing" },
            { name: "UX Development", key: "ux-development" },
            { name: "UX Design", key: "ux-design" },
            { name: "UX Research", key: "ux-research" },
            { name: "UX Managing", key: "ux-managing" },
          ]}
          dataPoints={[
            {
              name: "Ervaring",
              color: "#6267cbc2",
              values: {
                "ux-writing": 5,
                "ux-development": 4,
                "ux-design": 5,
                "ux-research": 5,
                "ux-managing": 5,
              },
            },
            {
              name: "Interesse",
              color: "#dd7474b8",
              values: {
                "ux-writing": 1,
                "ux-development": 9,
                "ux-design": 1,
                "ux-research": 5,
                "ux-managing": 5,
              },
            },
          ]}
          size={500}
        />
      </div>

      <div className="container mx-auto grid grid-cols-2 content-center items-center justify-center gap-16 py-16 text-center font-bold">
        <Link className="rounded border border-gray-400 p-16" to={"writing"}>
          UX Writing
        </Link>
        <Link
          className="rounded border border-gray-400 p-16"
          to={"development"}
        >
          UX Development
        </Link>
        <Link className="rounded border border-gray-400 p-16" to={"design"}>
          UX Design
        </Link>
        <Link className="rounded border border-gray-400 p-16" to={"research"}>
          UX Research
        </Link>
        <Link className="rounded border border-gray-400 p-16" to={"managing"}>
          UX Managing
        </Link>
      </div>
    </div>
  );
}
