import { commonTheme } from './common';

export const redTheme = {
  fonts: {
    ...commonTheme.fonts,
  },
  colors: {
    ...commonTheme.colors,
    background: '#E3CDCD',
  },
};

export type RedTheme = typeof redTheme;
