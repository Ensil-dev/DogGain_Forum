import { css } from "styled-components";

const sizes = {
  desktop: 1200,
  tablet: 768,
  phone: 550,
};

const mediaQuery = Object.entries(sizes).reduce((acc, [key, value]) => {
  acc[key] = (first, ...interpolations) => css`
    @media (max-width: ${value}px) {
      ${css(first, ...interpolations)}
    }
  `;
  return acc;
}, {});

export { mediaQuery };