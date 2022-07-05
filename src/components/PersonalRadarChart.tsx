import React from "react";
import { useSnapshot } from "valtio";
import { assessmentToCategoryScores, CategoryScores } from "../calculations";
import { selfAssessmentState } from "../state";
import { RadarChart } from "./RadarChart";

export function PersonalRadarChart() {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);

  return (
    <RadarChart
      categories={[
        { name: "UX Writing", key: "writing" },
        { name: "UX Development", key: "development" },
        { name: "UX Design", key: "design" },
        { name: "UX Research", key: "research" },
        { name: "UX Managing", key: "managing" },
      ]}
      dataPoints={[
        {
          name: "Ervaring",
          color: "#6267cbc2",
          values: assessmentToCategoryScores(selfAssessmentSnapshot) as any,
        },
      ]}
      size={500}
    />
  );
}
