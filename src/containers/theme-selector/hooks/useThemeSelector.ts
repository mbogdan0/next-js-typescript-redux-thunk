import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/root-reducer';
import { ThemeState, EnumTheme } from '../../../styled/theme/types';
import { changeTheme } from '../../../styled/theme/actions';

export const useThemeSelector = () => {
  const { selected } = useSelector<AppState, ThemeState>((state) => state.theme);
  const dispatch = useDispatch();
  const switchTheme = (payload: EnumTheme) => {
    dispatch(changeTheme(payload));
  };
  return {
    selected,
    switchTheme,
  };
};
