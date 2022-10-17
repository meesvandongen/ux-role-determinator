import styled from "styled-components";
import {multiplyBase} from "../../styles/settings/rem.settings";
import {colors} from "../../styles/settings/colors.settings";
export const Logo = styled.div`
  display: grid;
  grid-template-columns: ${multiplyBase(5)} auto;
  grid-column-gap: ${multiplyBase(2)};
  align-items: center;
  width: fit-content;
  
  &.default {
    stroke: ${colors.icon.default};
    color: ${colors.icon.default};
  }

  &.inverted {
    stroke: ${colors.icon.inverted};
    color: ${colors.icon.inverted};
  }

  &.hoverable:hover {
    stroke: ${colors.icon.hover};
    color: ${colors.icon.hover};
  }
  
  span {
    display: block;
    margin: 0;
    padding: 0;
    font-weight: 700;
  }
`;

export const LogoSvg = styled.svg`
  display: block;
  width: 100%;
`;