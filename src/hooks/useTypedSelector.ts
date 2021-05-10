import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootStateType } from "../state";

export const useTypedSelector = useSelector as TypedUseSelectorHook<RootStateType>;
