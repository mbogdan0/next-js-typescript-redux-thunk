import {
  ThemeActionTypes,
  ThemeState,
  CHANGE_THEME,
} from './types';
import { greenTheme } from '../designs/green-theme';
import { redTheme } from '../designs/red-theme';
import { greyTheme } from '../designs/grey-theme';
import { blueTheme } from '../designs/blue-theme';


const initialState: ThemeState = {
  selected: 'grey',
  currentTheme: greyTheme,
};

export const themeReducer = (state = initialState, action: ThemeActionTypes): ThemeState => {
  if (action.type === CHANGE_THEME) {
    const selected = action.payload;
    const currentTheme = selected === 'green' ? greenTheme : selected === 'red' ? redTheme : selected === 'blue' ? blueTheme : greyTheme;
    return {
      ...state,
      selected,
      currentTheme,
    };
  }
  return state;
};
