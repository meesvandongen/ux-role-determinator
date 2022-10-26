import { ConductingResearch } from "./questions/ConductingResearch";
import { DataAnalysis } from "./questions/DataAnalysis";
import { DefiningResearch } from "./questions/DefiningResearch";
import { ResearchEvangelist } from "./questions/ResearchEvangelist";
import { QuestionnaireLayout } from "../../components/QuestionnaireLayout/QuestionnaireLayout";

export default function UxResearch(): JSX.Element {
  return (
    <QuestionnaireLayout
      title={"UX Research"}
      description={
        <>
          <p>
            UX researchers leren door het uitvoeren van onderzoek inzicht te
            krijgen in behoeftes van eindgebruikers. Daarmee begrijpen en
            identificeren ze de context, emoties, doelen en motivaties van
            verschillende doelgroepen.
          </p>
          <p>
            UX researchers brengen dit in kaart en koppelen het aan
            bedrijfsdoelstellingen, waardoor belangrijke vragen beantwoord
            kunnen worden.
          </p>
        </>
      }
      questions={
        <>
          <DefiningResearch />
          <ConductingResearch />
          <DataAnalysis />
          <ResearchEvangelist />
        </>
      }
      three={"placeholder"}
    />
  );
}
