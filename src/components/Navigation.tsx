import NavigationLink from "./NavigationLink";

const Navigation = () => {
	return (
		<nav className="relative z-15 w-full max-w-184 flex justify-center items-center h-24 mt-10 navigation">
			<ul className="flex justify-center items-center gap-10 navigation-menu">
				<NavigationLink />
			</ul>
		</nav>
	);
};

export default Navigation;
