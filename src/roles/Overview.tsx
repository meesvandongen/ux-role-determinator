import React from "react";
import { Link } from "react-router-dom";

interface CardProps {
  to: string;
  title: string;
  description: string;
}
function Card({ to, title, description }: CardProps): JSX.Element {
  return (
    <Link
      to={to}
      className="rounded p-4 border-2 border-gray-200 hover:border-gray-400 space-y-2"
    >
      <h2 className="uppercase font-bold text-gray-800">{title}</h2>
      <p className="text-gray-800">{description}</p>
    </Link>
  );
}

export function Overview(): JSX.Element {
  return (
    <div className="max-w-screen-md mx-auto py-10">
      <div className="prose mx-auto">
        <h1 className="">Overzicht rollen</h1>
        <p>
          Hieronder worden de verschillende rollen binnen UX competency
          weergegeven.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-4">
        <Card
          to="roles/ux-specialist"
          title="UX Specialist"
          description="De UX specialist heeft expertise op bepaalde gebieden van User Experience Design."
        />
        <Card
          to="roles/ux-consultant"
          title="UX Consultant"
          description="De UX consultant is de spil tussen de business en de gebruiker."
        />
        {/* <Card /> */}
      </div>
    </div>
  );
}
