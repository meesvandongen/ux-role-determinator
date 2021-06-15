export enum Competency {
  noLevelOfCompetency,
  lowLevelOfCompetency,
  averageLevelOfCompetency,
  moderatelyHighLevelOfCompetency,
  highLevelOfCompetency,
}

export const competencyTranslations = {
  [Competency.noLevelOfCompetency]: "Geen ervaring",
  [Competency.lowLevelOfCompetency]: "Laag niveau",
  [Competency.averageLevelOfCompetency]: "Gemiddeld niveau",
  [Competency.moderatelyHighLevelOfCompetency]: "Tamelijk hoog niveau",
  [Competency.highLevelOfCompetency]: "Hoog niveau",
};
