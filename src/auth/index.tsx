import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";

// This interface can be extracted to an interface.ts file and imported here instead, since this one is used in multiple places.
interface ILink {
	href: string;
	name: string;
}

const links: ILink[] = [
	{ href: "/", name: "Home" },
	{ href: "/users", name: "Users" },
];

const App = (): JSX.Element => {
	return (
		<BrowserRouter>
			<Navigation links={links} />
			<Routes>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
