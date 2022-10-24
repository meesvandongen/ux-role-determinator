import styled from "styled-components";
import { multiplyBase, rem } from "../../styles/settings/rem.settings";
import { colors } from "../../styles/settings/colors.settings";
import { fontSizes } from "../../styles/settings/typography.settings";

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  padding: ${multiplyBase(3)};
  background-color: ${colors.background.dark};
  width: 100%;

  a {
    display: grid;
    grid-template-columns: max-content max-content;
    grid-column-gap: ${multiplyBase(2)};
    align-items: center;

    span {
      opacity: 0.7;
      color: ${colors.text.inverted};
      font-size: ${fontSizes.small};
      transform: translateY(${rem(2)});
    }

    svg {
      height: ${multiplyBase(4)};
      fill: ${colors.text.inverted};
    }
  }
`;
