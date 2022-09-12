import { useState, useEffect, MouseEvent } from "react";

import User from "../components/User";

// This interface can be extracted to an interface.ts file and imported here instead, since this one is used in multiple places.
interface IUser {
	id: number;
	name: string;
	email: string;
}

const Users = (): JSX.Element => {
	const [users, setUsers] = useState<IUser[] | null>(null);
	const [user, setUser] = useState<IUser | null>(null);

	const handleOnClick = (e: MouseEvent<HTMLSpanElement>) => {
		const target = e.target as HTMLSpanElement;
		const id = target.id;
		const clickedUser = users?.find((u) => u.id === +id);

		if (clickedUser) {
			setUser(clickedUser);
		}
	};

	useEffect(() => {
		async function fetchUsers() {
			const result = await fetch("https://jsonplaceholder.cypress.io/users");
			const users = await result.json();

			// We modify the users since we are only interested in id, name and email
			const modifiedUsers: IUser[] = users.map((user: any) => {
				return { id: user.id, name: user.name, email: user.email };
			});

			setUsers(modifiedUsers);
		}

		fetchUsers();
	}, []);

	return (
		<>
			<h1>This is the Users page!</h1>
			{!users && <p>Loading users...</p>}
			{users && (
				<>
					<ul>
						{users.map(({ id, name }) => (
							<li key={id}>
								<span
									onClick={handleOnClick}
									id={id.toString()}
									className="user"
								>
									{name}
								</span>
							</li>
						))}
					</ul>
					{user ? <User user={user} /> : ""}
				</>
			)}
		</>
	);
};

export default Users;
