import React from "react";
import { Campaigning } from "./Campaigning";
import { ContentManagement } from "./ContentManagement";
import { ContentStrategy } from "./ContentStrategy";
import { ContentWriting } from "./ContentWriting";
import { QuestionPageLayout } from "../components/QuestionPageLayout";

export function UxWriting(): JSX.Element {
  return (
    <QuestionPageLayout
      title={<h1>UX Writing 🧑‍🏫</h1>}
      description={
        <p>
          Een UX-writer is een storyteller die voor de uitdaging staat om alle
          elementen van content – waaronder relevantie, beeld, design, SEO en
          beleving – samen te laten smelten tot content en interacties die
          aansluiten op de verwachtingen en referentiekader van de
          eindgebruiker.
        </p>
      }
      questions={
        <>
          <ContentWriting />
          <Campaigning />
          <ContentManagement />
          <ContentStrategy />
        </>
      }
      three={"placeholder"}
    />
  );
}
