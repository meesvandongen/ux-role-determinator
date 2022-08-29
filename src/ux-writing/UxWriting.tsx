import React from "react";
import {Campaigning} from "./questions/Campaigning";
import {ContentManagement} from "./questions/ContentManagement";
import {ContentStrategy} from "./questions/ContentStrategy";
import {ContentWriting} from "./questions/ContentWriting";
import {QuestionnaireLayout} from "../components/QuestionnaireLayout/QuestionnaireLayout";

export function UxWriting(): JSX.Element {
  return (
    <QuestionnaireLayout
      title={"UX Writing"}
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
