import styled from "styled-components";
import {multiplyBase, rem} from "../../styles/settings/rem.settings";
import {colors} from "../../styles/settings/colors.settings";
import {borderRadius} from "../../styles/settings/border.settings";
import {Logo} from "../Logo/logo.styles";
import {fontFamilies} from "../../styles/settings/typography.settings";
import {eBreakpoint} from "../../styles/settings/media/media.models";
import media from '../../styles/settings/media/media.settings';

export const QuestionnaireLayout = styled.div`
`;

export const QuestionnaireHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: ${multiplyBase(4)};
  min-height: 100vh;
  padding: ${multiplyBase(3)};
  
  ${media.up(eBreakpoint.MEDIUM)`
     grid-template-columns: 1fr 1fr;
     grid-column-gap: ${multiplyBase(4)};
  `};
`;

export const QuestionnaireHeaderContent = styled.div`
  max-width: ${rem(640)};
  padding: 0 ${multiplyBase(4)};
  align-self: center;
  justify-self: center;
  
  ${Logo} {
    align-self: start;
    height: ${multiplyBase(5)};
    margin-bottom: ${multiplyBase(8)};
  }
`;

export const Questionnaire = styled.div`
  display: block;
  padding: ${multiplyBase(12)} 0;
  background-color: ${colors.background.dark};
`;

export const ButtonLink = styled.a`
  display: block;
  padding: ${multiplyBase(2)} ${multiplyBase(4)};
  margin-top: ${multiplyBase(8)};
  color: ${colors.button.primary.text};
  font-size: ${rem(14)};
  font-weight: 700;
  border-radius: ${borderRadius.default};
  background-color: ${colors.button.primary.background};
  width: max-content;
  transition: background-color .15s ease-in-out;
  font-family: ${fontFamilies.hindMadurai};
  
  span {
    display: block;
    transform: translateY(2px);
  }
  
  &:hover {
    color: ${colors.button.primary.hover.text};
    background-color: ${colors.button.primary.hover.background};
  }
`;