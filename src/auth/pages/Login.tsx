import { useEffect } from "react";

const Login = (): JSX.Element => {
	// TODO: Get what is needed from Context/Redux to implement login functionality.

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		const target = e.target as HTMLFormElement;

		// TODO: Login user with provided credential (e.target.login.value).
	};

	useEffect(() => {
		/*
		 * TODO: Check if user already is logged in in this useEffect. If so,
		 * redirect to "/users" using navigate.
		 */
	}, []);

	return (
		<>
			<h1>Login</h1>
			<form onSubmit={handleSubmit}>
				<input id="login" />
			</form>
			{/* TODO: If login error occurred, display suitable error message. */}
		</>
	);
};

export default Login;
