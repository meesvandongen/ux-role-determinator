import styled from "styled-components";
import { colors } from "../../styles/settings/colors.settings";
import { fontSizes } from "../../styles/settings/typography.settings";
import { multiplyBase, rem } from "../../styles/settings/rem.settings";

export const SkillAssessmentHeader = styled.div`
  h2 {
    color: ${colors.text.inverted};
    font-size: ${fontSizes.bigger};
    font-weight: 500;
    margin-bottom: ${multiplyBase(3)};
  }

  p {
    opacity: 0.8;
    color: ${colors.text.inverted};
  }
`;

export const SkillAssessmentRange = styled.div`
  grid-column: 2;
  grid-row: 2;
`;

export const SkillAssessment = styled.div`
  display: grid;
  grid-template-columns: ${rem(56)} 1fr ${rem(56)};
  grid-column-gap: ${multiplyBase(4)};
  grid-row-gap: ${multiplyBase(6)};

  ${SkillAssessmentHeader} {
    grid-column: 2;
    grid-row: 1;
  }

  .label {
    color: ${colors.text.inverted};
    font-size: ${fontSizes.default};
    grid-row: 2;

    &:first-child {
      justify-self: end;
      grid-column: 1;
    }
    &:last-child {
      justify-self: start;
      grid-column: 3;
    }
  }
`;
