import styled, { css } from "styled-components";

const titleSizes = {
  small: (theme) => css`
    font-size: ${theme.font.sizes.medium};
  `,
  medium: (theme) => css`
    font-size: ${theme.font.sizes.large};
  `,
  big: (theme) => css`
    font-size: ${theme.font.sizes.xlarge};
  `,
  huge: (theme) => css`
    font-size: ${theme.font.sizes.xhuge};
    ${mediaFont(theme)}
  `
};

const mediaFont = (theme) => css`
  @media ${theme.media.ltemedium} {
    font-size: ${theme.font.sizes.xlarge};
  }
`;

const titleCases = (uppercase) => css`
  text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const Title = styled.h1`
  ${({ theme, colorDark, size, uppercase }) => css`
    color: ${colorDark ? theme.colors.primaryColor : theme.colors.white};
    ${titleSizes[size](theme)};
    ${titleCases(uppercase)};
  `}
`;
