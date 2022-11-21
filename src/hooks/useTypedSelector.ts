import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootType } from "../store";

export const useTypedSelector: TypedUseSelectorHook<RootType> = useSelector;