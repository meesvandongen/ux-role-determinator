import styled from "styled-components";
import {colors} from "../../styles/settings/colors.settings";
import {Logo} from "../../components/Logo/logo.styles";
import {multiplyBase} from "../../styles/settings/rem.settings";

export const HomeHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto auto ${multiplyBase(10)};
  justify-content: center;
  padding: ${multiplyBase(5)};
  background-color: ${colors.background.dark};
  
  ${Logo} {
    grid-column: 1;
    grid-row: 1;
    align-self: center;
  }
  
  .total {
    grid-column: 2;
    grid-row: 1;
    align-self: center;
    justify-self: end;
    color: ${colors.text.inverted};
  }
  
  .legend {
    grid-column: 1;
    grid-row: 3;
    align-self: center;
    color: ${colors.text.inverted};
  }
  
  > *:nth-child(2) {
    grid-row-start: 1;
    grid-row-end: 4;
    grid-column: 1/3;
    align-self: center;
    justify-self: center;
  }
`;