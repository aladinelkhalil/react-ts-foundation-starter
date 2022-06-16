import { Provider } from "react-redux";
import ComponentA from "./ComponentA";
import ComponentB from "./ComponentB";

import { store } from "./store";

const App = (): JSX.Element => {
	return (
		<Provider store={store}>
			<ComponentA />
			<ComponentB />
		</Provider>
	);
};

export default App;
