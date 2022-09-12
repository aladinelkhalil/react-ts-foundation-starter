import { useEffect } from "react";
import { logService, toggleShouldLog } from "./dependenciesSlice";
import { useAppDispatch } from "./store";

const ComponentA = (): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(logService("Rendering Component A"));
    });

    return (
        <button onClick={() => dispatch(toggleShouldLog())}>
            Switch Logging
        </button>
    );
};

export default ComponentA;
