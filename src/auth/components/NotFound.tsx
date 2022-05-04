import { useLocation } from "react-router-dom";

const NotFound = (): JSX.Element => {
	const location = useLocation();

	return <h1>No page found for {location.pathname}</h1>;
};

export default NotFound;
