import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";
import DependencyProvider from "./DependencyProvider";

const App = (): JSX.Element => {
	return (
		<DependencyProvider>
			<ComponentA />
			<ComponentB />
		</DependencyProvider>
	);
};

export default App;
