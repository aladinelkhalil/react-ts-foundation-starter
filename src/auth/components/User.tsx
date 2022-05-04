import { IUser } from "../../interfaces"; // Create this interface

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
