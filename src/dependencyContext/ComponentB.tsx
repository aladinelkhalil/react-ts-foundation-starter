import { useDependency } from "./DependencyProvider";

const ComponentB = (): JSX.Element => {
	const { shouldLog, logService } = useDependency();

	logService("Rendering Component B");

	return <p>Logging: {shouldLog ? "enabled" : "disabled"}</p>;
};

export default ComponentB;
