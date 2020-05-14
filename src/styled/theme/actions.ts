import { CHANGE_THEME, ThemeActionTypes, EnumTheme } from './types';

export function changeTheme(payload: EnumTheme): ThemeActionTypes {
  return {
    type: CHANGE_THEME,
    payload,
  };
}
