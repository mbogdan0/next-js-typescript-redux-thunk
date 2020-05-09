import { commonTheme } from './common';

export const redTheme = {
  fonts: {
    ...commonTheme.fonts,
  },
  colors: {
    ...commonTheme.colors,
    background: '#DDC8C8',
  },
};

export type RedTheme = typeof redTheme;
