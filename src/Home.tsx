import React from "react";
import { Link } from "react-router-dom";

export function Home(): JSX.Element {
  return (
    <div className="grid grid-cols-2 items-center content-center justify-center text-center gap-16 py-16 mx-auto container font-bold">
      <Link className="p-16 border border-gray-400 rounded" to={"/content"}>
        Content Specialist
      </Link>
      <Link className="p-16 border border-gray-400 rounded" to={"/developer"}>
        Developer
      </Link>
      <Link
        className="p-16 border border-gray-400 rounded"
        to={"/interaction-designer"}
      >
        Interaction Designer
      </Link>
      <Link
        className="p-16 border border-gray-400 rounded"
        to={"/user-researcher"}
      >
        User Researcher
      </Link>
    </div>
  );
}
