import React from "react";
import { ContentSpecialist } from "./content-specialist/ContentSpecialist";
import { CreativeDeveloper } from "./creative-developer/CreativeDeveloper";
import { InteractionDesigner } from "./interaction-designer/InteractionDesigner";
import { UserResearcher } from "./user-researcher/UserResearcher";
import { UxSpecialistSoftSkills } from "./ux-specialist-soft-skills/UxSpecialistSoftSkills";
import { UxSpecialistCharts } from "./ux-specialist-charts/UxSpecialistCharts";

export function UxSpecialist() {
  return (
    <>
      <div>
        <h1>UX Specialist</h1>
        <p>
          De UX specialist heeft expertise op bepaalde gebieden van User
          Experience Design. De volgende gebieden vallen onder de UX specialist
          rol:
        </p>
        <ul>
          <li>Creative Developer</li>
          <li>Interaction Designer</li>
          <li>User Researcher</li>
          <li>Content Specialist</li>
        </ul>
      </div>
      <CreativeDeveloper />
      <InteractionDesigner />
      <UserResearcher />
      <ContentSpecialist />
      <UxSpecialistSoftSkills />
      <UxSpecialistCharts />
    </>
  );
}
