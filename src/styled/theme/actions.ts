import { CHANGE_THEME, ThemeActionTypes, EnumTheme } from './types';

export function changeTheme(payload: EnumTheme): ThemeActionTypes {
  if (typeof window !== 'undefined' && window.localStorage) {
    window.localStorage.setItem('theme_palette', payload);
  }
  return {
    type: CHANGE_THEME,
    payload,
  };
}
