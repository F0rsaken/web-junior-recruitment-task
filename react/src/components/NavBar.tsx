import { Link } from "react-router-dom";

function NavBar() {
	return (
		<nav className="topbar">
			<div className="container">
				<Link className="nav-link" to="/">
					Home
				</Link>
			</div>
		</nav>
	);
}

export default NavBar;
