import styled from "styled-components";
import {multiplyBase} from "../../styles/settings/rem.settings";
import {colors} from "../../styles/settings/colors.settings";
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: fit-content;
  stroke: ${colors.icon.default};
  color: ${colors.icon.default};

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
  margin-right: ${multiplyBase(2)};
  width: auto;
  height: 100%;
`;