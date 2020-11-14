import { css } from "@emotion/core";

const fontSizeBase = 1;

const mullishBold = css`
  font-family: "Mulish", sans-serif;
  font-weight: bold;
  font-size: ${fontSizeBase}em;
`;

const mullishBoldSmall = css`
  font-family: "Mulish", sans-serif;
  font-weight: bold;
  font-size: ${(fontSizeBase * 11) / 16}em;
`;
