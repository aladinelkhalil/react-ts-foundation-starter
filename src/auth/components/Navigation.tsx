import { Link } from "react-router-dom";

// This interface can be extracted to an interface.ts file and imported here instead, since this one is used in multiple places.
interface ILink {
    href: string;
    name: string;
}

interface NavigationProps {
	links: ILink[];
}

const Navigation = ({ links }: NavigationProps): JSX.Element => {
	// TODO: Get what is needed from AppContext to implement logout functionality.

	return (
		<nav>
			{links.map(({ href, name }, i) => (
				<Link className="link" key={i} to={href}>
					{name}
				</Link>
			))}
			{/* TODO 2: Show logout button if user logged in and write the code that 
            allows them to logout. */}
		</nav>
	);
};

export default Navigation;
