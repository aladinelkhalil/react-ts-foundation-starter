import { useDependency } from "./DependencyProvider";

const ComponentA = (): JSX.Element => {
	const { setShouldLog, logService } = useDependency();

	logService("Rendering Component A");

	return (
		<button onClick={() => setShouldLog((prevShouldLog) => !prevShouldLog)}>
			Switch Logging
		</button>
	);
};

export default ComponentA;
