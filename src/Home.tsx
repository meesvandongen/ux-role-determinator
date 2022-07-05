import React from "react";
import { Link } from "react-router-dom";
import { PersonalRadarChart } from "./components/PersonalRadarChart";

export function Home(): JSX.Element {
  return (
    <div>
      <div className="flex flex-col place-items-center bg-[rgb(17,11,25)] py-16">
        <h1 className="text-gray-50">Kennis Matrix</h1>
        <PersonalRadarChart />
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
