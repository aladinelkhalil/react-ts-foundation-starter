import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
// import App from "./feed";
// import App from "./todo";
// import { App } from "./useEffect";
// import App from "./dependencyContext";
// import App from "./auth";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);

root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
