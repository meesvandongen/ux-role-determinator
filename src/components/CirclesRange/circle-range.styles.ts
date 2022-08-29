import styled from "styled-components";
import {borderWidth} from "../../styles/settings/border.settings";
import {colors} from "../../styles/settings/colors.settings";
import {multiplyBase, rem} from "../../styles/settings/rem.settings";

export const Circle = styled.span<{checked?: boolean, index?: number}>`
  border-width: ${borderWidth.default};
  border-color: ${colors.border.inverted};
  border-radius: 100%;
  border-style: solid;
  width: ${multiplyBase(5)};
  height: ${multiplyBase(5)};
  
  &:after {
    display: block;
    content: '';
    width: 100%;
    height: 100%;
    background-color: ${colors.border.inverted};
    border-radius: 100%;
    transform: ${props => props.checked ? 'scale(1.1)' : 'scale(0)' };
    transform-origin: center center;
    transition: transform 200ms ease-in-out;
    transition-delay: ${props => props.index ? props.index * 50 : 0}ms;
  }
`;