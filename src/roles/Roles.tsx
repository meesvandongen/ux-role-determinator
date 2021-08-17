import React from "react";
import { Outlet } from "react-router-dom";

export function Roles(): JSX.Element {
  return (
    <div className="prose mx-auto py-10 px-2 md:px-0 space-y-32">
      <Outlet />
    </div>
  );
}
