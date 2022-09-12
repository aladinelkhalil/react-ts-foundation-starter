import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { logService as loggingService } from "./logService";

interface IDependenciesSliceState {
    shouldLog: boolean;
}

const initialState: IDependenciesSliceState = {
    shouldLog: true,
};

const dependenciesSlice = createSlice({
    /**
     * The name is used as namespace for the actions that the slice creates.
     */
    name: "dependencies",

    /**
     * The initialState must be named initialState. Since I have created a variable with
     * the same name, I can just use the shorthand version of the key/value pair.
     *
     */
    initialState,

    /*
     * The reducers are the working horses of redux. Their job is to interact with the state.
     * Under the hood, redux creates actions that we can dispatch throughout the component,
     * with the help of useAppDispatch. These actions are objects containing an action type
     * and an action payload (The action payload can be optional depending on the reducers
     * function). When an actions is dispatched the slice goes through its reducers to see
     * which reducer that matches the incoming action.
     *
     * Redux Toolkit allows us to write "mutating" logic in reducers. It doesn't
     * actually mutate the state because it uses the Immer library underneath, which detects
     * changes to a "draft state" and produces a brand new immutable state based
     * off those changes
     *
     * The type "PayloadAction" is a generic type that redux gives us so that we can type up
     * our action in a correct way.
     * */
    reducers: {
        toggleShouldLog: (state) => {
            state.shouldLog = !state.shouldLog;
        },
        logService: (state, action: PayloadAction<string>) => {
            loggingService(action.payload);
        },
    },
});

/*
 * These are the actions that we export from this component. They are automatically given
 * the same name as the reducer functions, so we need to export them as such.
 * */
export const { toggleShouldLog, logService } = dependenciesSlice.actions;

/*
 * This is the default export that gives us the slice that we want to import in to our
 * store configuration.
 * */
export default dependenciesSlice.reducer;
