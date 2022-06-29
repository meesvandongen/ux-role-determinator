import React from "react";
import { ConductingResearch } from "./ConductingResearch";
import { DataAnalysis } from "./DataAnalysis";
import { DefiningResearch } from "./DefiningResearch";
import { ResearchEvangelist } from "./ResearchEvangelist";
import { QuestionPageLayout } from "../components/QuestionPageLayout";

export function UserResearcher(): JSX.Element {
  return (
    <QuestionPageLayout
      title={<h1>User Researcher</h1>}
      description={
        <p>
          De user researcher is een uitvoerende rol op het gebied van
          gebruikersonderzoek. Aan de hand van onder meer tests,
          gebruikersonderzoeken, statistieken en analyses wordt nagegaan hoe een
          gebruiker bepaalde websites, producten, apps, webtoepassingen etc.
          ervaart.
        </p>
      }
      questions={
        <>
          <DefiningResearch />
          <ConductingResearch />
          <DataAnalysis />
          <ResearchEvangelist />
        </>
      }
      three={"placeholder"}
    />
  );
}
