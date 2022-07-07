import {createGlobalStyle} from "styled-components";
import {fontFamilies} from "./settings/typography.settings";
import {colors} from "./settings/colors.settings";
import {multiplyBase, rem} from "./settings/rem.settings";

export const GlobalStyles = createGlobalStyle`
    
    // Typography
    // ========================
    html {
      font-size: 16px;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${fontFamilies.montserrat};
      color: ${colors.text.dark};
    }

    h1 {
      font-weight: 700;
      font-size: ${rem(32)};
      line-height: ${rem(32)};

      &:not(:last-child) {
        margin-bottom: ${multiplyBase(4)};
      }
    }

    p {
      font-family: ${fontFamilies.hindMadurai};
      font-size: ${rem(16)};
      line-height: ${rem(24)};
      color: ${colors.text.default};
      font-weight: 370;

      strong {
        font-weight: 600;
      }

      a {
        color: ${colors.text.anchor};
        text-decoration: underline;
      }

      &:not(:last-of-type) {
        margin-bottom: ${rem(16)};
      }
    }
`;