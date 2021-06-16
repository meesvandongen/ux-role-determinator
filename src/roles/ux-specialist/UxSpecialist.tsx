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
      <CreativeDeveloper />
      <InteractionDesigner />
      <UserResearcher />
      <ContentSpecialist />
      <UxSpecialistSoftSkills />
      <UxSpecialistCharts />
    </>
  );
}
