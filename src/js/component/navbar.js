import React from "react";
import { Link } from "react-router-dom";


export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<div className="container-fluid">
					<span className="navbar-brand mb-0">
						<img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG39.png" alt="Logo" style={{ height: "40px" }} />
					</span>
				</div>
			</Link>
			<div className="ml-auto">
				<div className="dropdown">
					<Link to="/demo" className="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
						Options
					</Link>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						<li><Link className="dropdown-item" to="/action">Action</Link></li>
						<li><Link className="dropdown-item" to="/another-action" >Another action</Link></li>
						<li><Link className="dropdown-item" to="/something-else">Something else here</Link></li>
					</ul>
				</div>
			</div>

		</nav>
	);
};
