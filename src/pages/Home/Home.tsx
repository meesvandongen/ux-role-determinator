import { PersonalRadarChart } from "../../components/PersonalRadarChart";
import { KnowledgeDomain } from "../../models/knowledge-domain.models";
import { KnowledgeDomainCard } from "../../components/KnowledgeDomainCard/KnowledgeDomainCard";
import { useSnapshot } from "valtio";
import { selfAssessmentState } from "../../state";
import { assessmentToCategoryScores, categories } from "../../calculations";
import { Logo } from "../../components/Logo/Logo";
import * as S from "./home.styles";
import { useHomeQuery } from "../../utils/__generated__/graphql";

export function Home(): JSX.Element {
  const selfAssessmentSnapshot = useSnapshot(selfAssessmentState);
  const selfAssessment = assessmentToCategoryScores(selfAssessmentSnapshot);

  const { data, loading } = useHomeQuery();

  const totalCompleted = categories.reduce((acc, category) => {
    const part = selfAssessment[category];
    if (part.progress.completed === part.progress.total) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return (
    <div>
      <S.HomeHeader>
        <Logo style={"inverted"} />
        <PersonalRadarChart />
        <div className="total">{totalCompleted}/5</div>
        <ul className="legend">
          <li>Ervaring</li>
          <li>Interesse</li>
        </ul>
      </S.HomeHeader>

      <div className="container mx-auto grid grid-cols-2 content-center items-center justify-center gap-32 py-32 px-24">
        {data?.categories.map((category) => (
          <KnowledgeDomainCard
            key={category.id}
            title={category.title}
            id={category.id}
          />
        ))}
        {/* <KnowledgeDomainCard
          domain={KnowledgeDomain.DEVELOPMENT}
          title="UX Development"
          progress={selfAssessment[KnowledgeDomain.DEVELOPMENT].progress}
        />
        <KnowledgeDomainCard
          domain={KnowledgeDomain.VISUAL_DESIGN}
          title="UX Visual Design"
          progress={selfAssessment[KnowledgeDomain.VISUAL_DESIGN].progress}
        />
        <KnowledgeDomainCard
          domain={KnowledgeDomain.WRITING}
          title="UX Writing"
          progress={selfAssessment[KnowledgeDomain.WRITING].progress}
        />
        <KnowledgeDomainCard
          domain={KnowledgeDomain.MANAGING}
          title="UX Managing"
          progress={selfAssessment[KnowledgeDomain.MANAGING].progress}
        />
        <KnowledgeDomainCard
          domain={KnowledgeDomain.RESEARCH}
          title="UX Research"
          progress={selfAssessment[KnowledgeDomain.RESEARCH].progress}
        /> */}
      </div>
    </div>
  );
}
