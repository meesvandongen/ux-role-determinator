import styled from "styled-components";
import {multiplyBase} from "../../styles/settings/rem.settings";
export const Logo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  
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