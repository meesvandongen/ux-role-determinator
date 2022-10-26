import { KnowledgeDomain } from "../../models/knowledge-domain.models";
import { Icon, Icons } from "../Icon/Icon";
import * as S from "./knowledge-domain-card.styles";
import { Progress } from "../../calculations";

interface KnowledgeDomainCardProps {
  domain: KnowledgeDomain;
  title: string;
  progress: Progress;
}

export function KnowledgeDomainCard({
  title,
  domain,
  progress,
}: KnowledgeDomainCardProps): JSX.Element {
  return (
    <S.KnowledgeDomainCard to={domain}>
      <Icon icon={domain} />
      <h2>{title}</h2>
      <Icon icon={Icons.CHEVRON} />
      <S.ProgressBar>
        <S.Progress progress={(100 * progress.completed) / progress.total} />
      </S.ProgressBar>
    </S.KnowledgeDomainCard>
  );
}
