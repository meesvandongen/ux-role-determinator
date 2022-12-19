import { KnowledgeDomain } from "../../models/knowledge-domain.models";
import { Icon, Icons } from "../Icon/Icon";
import * as S from "./knowledge-domain-card.styles";
import { Progress } from "../../calculations";

interface KnowledgeDomainCardProps {
  id: string;
  title: string;
  // progress: number;
  // icon: string;
}

export function KnowledgeDomainCard({
  title,
  id,
}: // progress,
KnowledgeDomainCardProps): JSX.Element {
  return (
    <S.KnowledgeDomainCard to={`/categories/${id}`}>
      {/* <Icon icon={domain} /> */}
      <h2>{title}</h2>
      <Icon icon={Icons.CHEVRON} />
      {/* <S.ProgressBar>
        <S.Progress progress={(100 * progress.completed) / progress.total} />
      </S.ProgressBar> */}
    </S.KnowledgeDomainCard>
  );
}
