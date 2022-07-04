import React from "react";
import { useSnapshot } from "valtio";
import { TaskSection } from "../components/TaskSection";
import { selfAssessmentState } from "../state";

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
        <ul>
          <li>
            Iteratief verbeteren van de customer journey als onderdeel van ‘het
            development team’
          </li>
          <li>
            Actief bijdragen aan optimalisaties op het gebied van conversie /
            leads
          </li>
          <li>
            Bepalen van de doelgroep door middel van onder andere user story’s
            en persona’s
          </li>
          <li>Het ontwerpen van tests (Usability tests, A/B)</li>
          <li>Kwantitatieve en kwalitatieve onderzoeken definiëren.</li>
        </ul>
      }
    />
  );
}
