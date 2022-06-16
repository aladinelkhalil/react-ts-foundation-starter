import { logService, setShouldLog } from "./dependenciesSlice";
import { useAppDispatch } from "./store";

const ComponentA = (): JSX.Element => {
	const dispatch = useAppDispatch();

	dispatch(logService("Rendering Component A"));

	return (
		<button onClick={() => dispatch(setShouldLog(false))}>
			Switch Logging
		</button>
	);
};

export default ComponentA;
