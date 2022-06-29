import React from "react";
import { CodeUxAdvocate } from "./CodeUxAdvocate";
import { DesignImplementation } from "./DesignImplementation";
import { RichInteraction } from "./RichInteraction";

export function CreativeDeveloper(): JSX.Element {
  return (
    <div className="">
      <div className="bg-gray-50 grid grid-cols-1 md:grid-cols-2 gap-x-16">
        <div className="prose mx-auto md:mr-0 py-32 px-4 row-start-2 md:row-start-auto">
          <h1>UX Development</h1>
          <p>
            De creative developer is een frontend ontwikkelaar met veel
            affiniteit voor UX en Visual design. Door input van verschillende
            informatie bronnen — zoals gebruikersonderzoek, business
            requirements, user stories — is de creative developer in staat om
            een oplossing te realiseren in de frontend.
          </p>

          <a
            href="#vragenlijst"
            className="bg-blue-600 text-blue-50 px-3 py-1.5 w-[16rem] rounded max-w-full mt-16 inline-block text-center no-underline hover:bg-blue-500"
          >
            Start
          </a>
        </div>
        <div className="w-full h-full min-h-[400px] bg-red-500 row-start-1 md:row-start-auto">
          placeholder
        </div>
      </div>
      <div className="bg-[rgb(17,11,25)] text-purple-50" id="vragenlijst">
        <div className="space-y-32 py-32">
          <DesignImplementation />
          <RichInteraction />
          <CodeUxAdvocate />
        </div>
      </div>
    </div>
  );
}
