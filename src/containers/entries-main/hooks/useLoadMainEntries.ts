import { useSelector } from 'react-redux';
import { AppState } from '../../../redux/root-reducer';
import { EntriesMainState } from '../redux/reducer';


export const useLoadMainEntries = () => {
  const {
    loading,
    success,
    error,
    data,
  } = useSelector<AppState, EntriesMainState>((state) => state.mainEntries);
  return {
    loading,
    success,
    error,
    data,
  };
};
