import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../../components/TaskSection";
import { selfAssessmentState } from "../../state";

export function DefiningResearch(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <TaskSection
      skillAssessmentValue={selfAssessmentSnapshot.definingResearch}
      onSkillAssessmentChange={(newValue) => {
        selfAssessmentState.definingResearch = newValue;
      }}
      title="Onderzoek definiëren"
      description={
        <>
          <p>
            Iteratief verbeteren van de customer journey als onderdeel van ‘het
            development team’
          </p>
          <p>
            Actief bijdragen aan optimalisaties op het gebied van conversie /
            leads
          </p>
          <p>
            Bepalen van de doelgroep door middel van onder andere user story’s
            en persona’s
          </p>
          <p>Het ontwerpen van tests (Usability tests, A/B)</p>
          <p>Kwantitatieve en kwalitatieve onderzoeken definiëren.</p>
        </>
      }
    />
  );
}
