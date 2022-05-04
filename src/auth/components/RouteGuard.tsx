import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppContext } from "../AppProvider";

interface RequireAuthProps {
	children: ReactNode;
}

const RouteGuard = ({ children }: RequireAuthProps): JSX.Element => {
	const { user } = useAppContext(); // This will work when the useAppContext has been properly coded
	const navigate = useNavigate();

	useEffect(() => {
		//Redirect them to the /login if not logged in.

		if (!user) {
			navigate("/login");
		}
	});

	return <>{children}</>;
};

export default RouteGuard;
