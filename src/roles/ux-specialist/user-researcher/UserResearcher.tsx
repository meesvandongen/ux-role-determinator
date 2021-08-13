import React from "react";
import { ConductingResearch } from "./ConductingResearch";
import { DataAnalysis } from "./DataAnalysis";
import { DefiningResearch } from "./DefiningResearch";
import { ResearchEvangelist } from "./ResearchEvangelist";

export function UserResearcher(): JSX.Element {
  return (
    <div>
      <h1>User Researcher</h1>
      <p>
        De user researcher is een uitvoerende rol op het gebied van
        gebruikersonderzoek. Aan de hand van onder meer tests,
        gebruikersonderzoeken, statistieken en analyses wordt nagegaan hoe een
        gebruiker bepaalde websites, producten, apps, webtoepassingen etc.
        ervaart.
      </p>
      <h2>Taken</h2>
      <DefiningResearch />
      <ConductingResearch />
      <DataAnalysis />
      <ResearchEvangelist />
    </div>
  );
}
