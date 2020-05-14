import { commonTheme } from './common';

export const greenTheme = {
  fonts: {
    ...commonTheme.fonts,
  },
  colors: {
    ...commonTheme.colors,
    background: '#CEE1CC',
  },
};

export type GreenTheme = typeof greenTheme;
