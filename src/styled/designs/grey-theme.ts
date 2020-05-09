import { commonTheme } from './common';

export const greyTheme = {
  fonts: {
    ...commonTheme.fonts,
  },
  colors: {
    ...commonTheme.colors,
    background: '#DDDDDD',
  },
};

export type GreyTheme = typeof greyTheme;
