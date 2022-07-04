import React from "react";
import { ConductingResearch } from "./ConductingResearch";
import { DataAnalysis } from "./DataAnalysis";
import { DefiningResearch } from "./DefiningResearch";
import { ResearchEvangelist } from "./ResearchEvangelist";
import { QuestionPageLayout } from "../components/QuestionPageLayout";

export function UxResearch(): JSX.Element {
  return (
    <QuestionPageLayout
      title={<h1>UX Research 🕵️‍♀️</h1>}
      description={
        <>
          <p>
            UX researchers leren door het uitvoeren van onderzoek inzicht te
            krijgen in behoeftes van eindgebruikers. Daarmee begrijpen en
            identificeren ze de context, emoties, doelen en motivaties van
            verschillende doelgroepen.
          </p>
          <p>
            UX researchers brengen dit in kaart en koppelen het aan
            bedrijfsdoelstellingen, waardoor belangrijke vragen beantwoord
            kunnen worden.
          </p>
        </>
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
