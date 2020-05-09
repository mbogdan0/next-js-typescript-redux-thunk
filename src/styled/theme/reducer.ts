import {
  ThemeActionTypes,
  ThemeState,
  CHANGE_THEME,
  EnumTheme,
} from './types';
import { greenTheme } from '../designs/green-theme';
import { redTheme } from '../designs/red-theme';
import { greyTheme } from '../designs/grey-theme';

const getInitial = (): ThemeState => {
  const def: ThemeState = {
    selected: 'green',
    currentTheme: greenTheme,
  };
  if (typeof window !== 'undefined' && window.localStorage) {
    const current = window.localStorage.getItem('theme_palette') as EnumTheme;
    switch (current) {
      case 'red':
        return {
          selected: 'red',
          currentTheme: redTheme,
        };
      case 'green':
        return {
          selected: 'green',
          currentTheme: greenTheme,
        };
      case 'grey':
        return {
          selected: 'grey',
          currentTheme: greyTheme,
        };
      default:
        return def;
    }
  }
  return def;
};

const initialState: ThemeState = getInitial();

export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
  if (action.type === CHANGE_THEME) {
    const selected = action.payload;
    const currentTheme = selected === 'green' ? greenTheme : selected === 'red' ? redTheme : greyTheme;
    return {
      ...state,
      selected,
      currentTheme,
    };
  }
  return state;
};
