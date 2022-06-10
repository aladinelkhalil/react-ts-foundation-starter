import "./style.css";

// This interface can be extracted to an interface.ts file and imported here instead, since this one is used in multiple places.
interface IItems {
	title: string;
	image: string;
}

const items: IItems[] = [
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
