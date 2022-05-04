import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ILink } from "../interfaces";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Navigation from "./components/Navigation";

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
