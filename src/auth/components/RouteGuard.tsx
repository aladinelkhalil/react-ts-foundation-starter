import { ReactNode, useEffect } from "react";

interface RequireAuthProps {
	children: ReactNode;
}

const RouteGuard = ({ children }: RequireAuthProps): JSX.Element => {
	// TODO: Get what is needed from Context/Redux to access the user.

	useEffect(() => {
		//Redirect them to the /login if not logged in.
	});

	return <>{children}</>;
};

export default RouteGuard;
