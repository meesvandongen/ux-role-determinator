import React from "react";
import { CodeUxAdvocate } from "./CodeUxAdvocate";
import { DesignImplementation } from "./DesignImplementation";
import { RichInteraction } from "./RichInteraction";

export function CreativeDeveloper(): JSX.Element {
  return (
    <div>
      <h1>Creative Developer</h1>
      <p>
        De creative developer is een frontend ontwikkelaar met veel affiniteit
        voor UX en Visual design. Door input van verschillende informatie
        bronnen — zoals gebruikersonderzoek, business requirements, user stories
        — is de creative developer in staat om een oplossing te realiseren in de
        frontend.
      </p>
      <h2>Taken</h2>
      <DesignImplementation />
      <RichInteraction />
      <CodeUxAdvocate />
    </div>
  );
}
