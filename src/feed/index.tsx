import "./style.css";

// Interface which are exported from the global interfaces file.
import { IItem } from "../interfaces";

const items: IItem[] = [
	{
		title: "first item",
		image: "http://via.placeholder.com/350x150",
	},
	{
		// comment out the title property to generate an error while rendering a Card component.
		title: "second item",
		image: "http://via.placeholder.com/350x150",
	},
	{
		title: "third item",
		image: "http://via.placeholder.com/350x150",
	},
];

const App = (): JSX.Element => {
	return <h1>App Feed</h1>;
};

export default App;
