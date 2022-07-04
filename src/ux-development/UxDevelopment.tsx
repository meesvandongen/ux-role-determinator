import React from "react";
import { QuestionPageLayout } from "../components/QuestionPageLayout";
import { CodeUxAdvocate } from "./CodeUxAdvocate";
import { DesignImplementation } from "./DesignImplementation";
import { RichInteraction } from "./RichInteraction";

export function UxDevelopment(): JSX.Element {
  return (
    <QuestionPageLayout
      title={<h1>UX Development 🧑‍💻</h1>}
      description={
        <>
          <p>
            Bij UX Development verbindt een UX Specialist creativiteit en
            techniek. Met een ultieme gebruikerservaring als uitgangspunt,
            schrijft een UX Specialist code om designs en architecturen tot
            leven te brengen.
          </p>
          <p>
            Een UX Specialist houdt zich up-to-date met de nieuwste
            technologieën en weet welke technologische toepassingen het beste
            aansluiten bij de gebruikersbehoefte en bedrijfsstrategie.
          </p>
        </>
      }
      questions={
        <>
          <DesignImplementation />
          <RichInteraction />
          <CodeUxAdvocate />
        </>
      }
      three={"placeholder"}
    />
  );
}
