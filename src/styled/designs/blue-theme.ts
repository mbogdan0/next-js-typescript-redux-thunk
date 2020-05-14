import { commonTheme } from './common';

export const blueTheme = {
  fonts: {
    ...commonTheme.fonts,
  },
  colors: {
    ...commonTheme.colors,
    background: '#CCE2F2',
  },
};

export type BlueTheme = typeof blueTheme;
