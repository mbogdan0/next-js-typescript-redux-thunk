import { GreenTheme } from '../designs/green-theme';
import { RedTheme } from '../designs/red-theme';
import { GreyTheme } from '../designs/grey-theme';

export type SiteTheme = GreenTheme | RedTheme | GreyTheme;
export type EnumTheme = 'green' | 'red' | 'grey';

export type ThemeState = {
  currentTheme: SiteTheme;
  selected: EnumTheme;
};

export const CHANGE_THEME = 'CHANGE_THEME';
type ChangeThemeAction = {
  type: typeof CHANGE_THEME;
  payload: EnumTheme;
};

export type ThemeActionTypes =
  | ChangeThemeAction;
