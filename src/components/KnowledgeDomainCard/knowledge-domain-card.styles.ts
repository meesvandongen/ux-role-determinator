import styled, {keyframes} from "styled-components";
import {multiplyBase} from "../../styles/settings/rem.settings";
import {fontSizes} from "../../styles/settings/typography.settings";
import {colors} from "../../styles/settings/colors.settings";
import {borderRadius} from "../../styles/settings/border.settings";
import {Link} from "react-router-dom";

interface ProgressStyles {
    progress: number;
}

export const progressAnimation = (progress: number) => {
    const test = progress - 100;
    return keyframes`
      0% {
        transform: translateX(-100%);
      }
      100% {
        transform: translateX(${test}%);
      }
    `;
}

export const KnowledgeDomainCard = styled(Link)`
  display: grid;
  grid-template-columns: ${multiplyBase(5)} auto ${multiplyBase(3)};
  grid-template-rows: auto ${multiplyBase(.5)};
  grid-column-gap: ${multiplyBase(2)};
  grid-row-gap: ${multiplyBase(2)};
  align-items: center;

  > *:nth-child(1) {
    grid-column: 1;
    grid-row: 1;
  }

  h2 {
    grid-row: 1;
    grid-column: 2;
    font-size: ${fontSizes.big};
    font-weight: bold;
    color: ${colors.text.dark};
    justify-self: start;
  }

  > *:nth-child(3) {
    grid-column: 3;
    grid-row: 1;
    transform: rotate(-90deg);
    transition: all ease-in-out 200ms;
  }
  
  &:hover {
    > *:nth-child(3) {
      transform: translateX(${multiplyBase(1)}) rotate(-90deg);
    }
  }
`;

export const ProgressBar = styled.div`
  grid-row: 2;
  grid-column: 1/4;
  width: 100%;
  height: 100%;
  border-radius: ${borderRadius.default};
  background-color: ${colors.background.light};
  overflow: hidden;

`;

export const Progress = styled.div<ProgressStyles>`
  display: block;
  border-radius: ${borderRadius.default};
  background-color: ${colors.statuses.progress};
  width: 100%;
  height: 100%;
  animation: ${props => progressAnimation(props.progress)} ease-in-out 700ms forwards;
`;
