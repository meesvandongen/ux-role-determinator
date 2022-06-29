import React from "react";
import { CodeUxAdvocate } from "./CodeUxAdvocate";
import { DesignImplementation } from "./DesignImplementation";
import { RichInteraction } from "./RichInteraction";

export function CreativeDeveloper(): JSX.Element {
  return (
    <div className="">
      <div className="bg-gray-50 container mx-auto flex py-32 gap-x-16">
        <div className="prose">
          <h1>UX Development</h1>
          <p>
            De creative developer is een frontend ontwikkelaar met veel
            affiniteit voor UX en Visual design. Door input van verschillende
            informatie bronnen — zoals gebruikersonderzoek, business
            requirements, user stories — is de creative developer in staat om
            een oplossing te realiseren in de frontend.
          </p>

          <button className="bg-blue-600 text-blue-50 px-3 py-1.5 w-[16rem] rounded max-w-full mt-16">
            Start
          </button>
        </div>
        <div className="w-full h-80 bg-red-500">placeholder</div>
      </div>
      <div className="bg-[rgb(17,11,25)] text-purple-50">
        <div className="max-w-prose mx-auto space-y-32 py-32">
          <DesignImplementation />
          <RichInteraction />
          <CodeUxAdvocate />
        </div>
      </div>
    </div>
  );
}
