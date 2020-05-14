import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../redux/root-reducer';
import { AddPostState } from '../redux/reducer';
import { thunkFetchAddPost } from '../redux/thunk-actions';

export const useCreatePost = () => {
  const { loading, success, error } = useSelector<AppState, AddPostState>((state) => state.addPost);
  const dispatch = useDispatch();
  const createPost = (payload) => {
    dispatch(thunkFetchAddPost(payload));
  };
  return {
    loading,
    success,
    error,
    createPost,
  };
};
