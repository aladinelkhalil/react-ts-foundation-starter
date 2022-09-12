import { useEffect } from "react";
import { logService } from "./dependenciesSlice";
import { useAppDispatch, useAppSelector } from "./store";

const ComponentB = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const shouldLog = useAppSelector((state) => state.dependencies.shouldLog);

    useEffect(() => {
        dispatch(logService("Rendering Component B"));
    });

    return <p>Logging: {shouldLog ? "enabled" : "disabled"}</p>;
};

export default ComponentB;
