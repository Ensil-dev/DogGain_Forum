import { css, FlattenSimpleInterpolation } from 'styled-components';

const sizes = {
  desktop: 1200,
  tablet: 768,
  phone: 550,
} as const;

type MediaQueryFunc = (
  first: TemplateStringsArray,
  ...interpolations: any[]
) => FlattenSimpleInterpolation;

type MediaQuery = Record<string, MediaQueryFunc>;

const mediaQuery: MediaQuery = Object.entries(sizes).reduce((acc, [key, value]) => {
  acc[key] = (first: TemplateStringsArray, ...interpolations: any[]) => css`
    @media (max-width: ${value}px) {
      ${css(first, ...interpolations)}
    }
  `;
  return acc;
}, {} as MediaQuery);

export { mediaQuery };
