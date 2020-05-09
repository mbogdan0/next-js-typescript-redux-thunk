import { commonTheme } from './common';

export const greenTheme = {
  fonts: {
    ...commonTheme.fonts,
  },
  colors: {
    ...commonTheme.colors,
    background: '#CADDC8',
  },
};

export type GreenTheme = typeof greenTheme;
