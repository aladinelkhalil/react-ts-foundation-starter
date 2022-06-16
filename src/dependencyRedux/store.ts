import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import dependencySlice from "./dependenciesSlice";

export const store = configureStore({
	reducer: {
		dependencies: dependencySlice,
	},
});

// Creation of the correct types.
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/**
 * These hooks is just an implementation of the already existing hooks in
 * redux, we have just given them the correct typing.
 */
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
