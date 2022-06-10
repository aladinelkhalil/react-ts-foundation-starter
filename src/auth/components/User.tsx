// This interface can be extracted to an interface.ts file and imported here instead, since this one is used in multiple places.
interface IUser {
	id: number;
	name: string;
	email: string;
}

interface IUserProps {
	user: IUser;
}

const User = ({ user }: IUserProps): JSX.Element => {
	return (
		<span>
			{user.name} | {user.email}
		</span>
	);
};

export default User;
