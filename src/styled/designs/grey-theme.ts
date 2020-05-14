import { commonTheme } from './common';

export const greyTheme = {
  fonts: {
    ...commonTheme.fonts,
  },
  colors: {
    ...commonTheme.colors,
    background: '#F0F0F0',
  },
};

export type GreyTheme = typeof greyTheme;
