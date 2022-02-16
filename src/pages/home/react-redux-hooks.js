import {
  useSelector as OriginalUseSelector,
  useDispatch as OriginaluseDispatch,
} from "react-redux";

export const useSelector = (state) => OriginalUseSelector(state);
export const useDispatch = (state) => OriginaluseDispatch(state);
