import React from "react";
import { QuestionPageLayout } from "../components/QuestionPageLayout";
import { CodeUxAdvocate } from "./CodeUxAdvocate";
import { DesignImplementation } from "./DesignImplementation";
import { RichInteraction } from "./RichInteraction";

export function CreativeDeveloper(): JSX.Element {
  return (
    <QuestionPageLayout
      title={<h1>UX Development</h1>}
      description={
        <p>
          De creative developer is een frontend ontwikkelaar met veel affiniteit
          voor UX en Visual design. Door input van verschillende informatie
          bronnen — zoals gebruikersonderzoek, business requirements, user
          stories — is de creative developer in staat om een oplossing te
          realiseren in de frontend.
        </p>
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
