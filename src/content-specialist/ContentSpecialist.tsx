import React from "react";
import { Campaigning } from "./Campaigning";
import { ContentManagement } from "./ContentManagement";
import { ContentStrategy } from "./ContentStrategy";
import { ContentWriting } from "./ContentWriting";
import { QuestionPageLayout } from "../components/QuestionPageLayout";

export function ContentSpecialist(): JSX.Element {
  return (
    <QuestionPageLayout
      title={<h1>Writer/Content Specialist</h1>}
      description={
        <p>
          Je houdt je bezig met het schrijven voor interfaces in digitale
          producten. Hierbij ligt de focus op het begeleiden van gebruikers door
          de interface op een intuïtieve manier. Je schrijft copy/microcopy met
          de juiste tone of voice die de gewenste emotie oproept passend bij de
          context waarin de (eind) gebruiker zich bevindt. Dit zet jouw klant in
          de schijnwerpers in de markt en bindt de (eind)gebruikers aan deze
          klant.
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
