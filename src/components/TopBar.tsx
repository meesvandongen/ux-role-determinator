import React from "react";
import nightwind from "nightwind/helper";
import { FlexSpacer } from "./FlexSpacer";

export function TopBar() {
  return (
    <div className="bg-white sticky top-0 w-full shadow-md z-10">
      <div className="max-w-screen-xl mx-auto flex flex-row items-center p-1">
        <span className="uppercase font-bold text-gray-900">UX Roles</span>
        <FlexSpacer />
        <button
          onClick={() => nightwind.toggle()}
          className="text-black p-2 focus:outline-none focus:ring focus:ring-blue-300 rounded-full"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
