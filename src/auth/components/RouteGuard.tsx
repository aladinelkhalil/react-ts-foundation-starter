import { ReactNode, useEffect } from "react";

interface RequireAuthProps {
	children: ReactNode;
}

const RouteGuard = ({ children }: RequireAuthProps): JSX.Element => {
	// const { user } = useAppContext(); // This will work when the useAppContext has been properly coded

	useEffect(() => {
		//Redirect them to the /login if not logged in.
	});

	return <>{children}</>;
};

export default RouteGuard;
