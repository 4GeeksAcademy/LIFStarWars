import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light m-3">
			<Link to="/">
				<div className="container-fluid">
					<span className="navbar-brand mb-0">
						<img src="https://pngimg.com/uploads/star_wars_logo/star_wars_logo_PNG39.png" alt="Logo" style={{ height: "50px" }} />
					</span>
				</div>
			</Link>

			<div className="ml-auto">
				<div className="dropdown">
					<button className="btn btn-primary dropdown-toggle"
						type="button"
						id="dropdownMenuButton"
						data-bs-toggle="dropdown"
						aria-expanded="false">

						Favorites ({store.favorites.length})
					</button>

					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.length > 0 ? (
							store.favorites.map((fav, index) => (

								<li key={index}>
									<span className="dropdown-item d-flex justify-content-between align-items-center">
										<span className="text-truncate" style={{ maxWidth: "150px" }} >{fav.name}</span>
										<i className="fa-solid fa-trash ms-4" style={{ cursor: "pointer", color: "red" }}
											onClick={() => actions.removeFavByUid(fav.uid, fav.type)}></i>
									</span>
								</li>
							))
						) : (
							<li>
								<span className="dropdown-items">No favorites added</span>
							</li>
						)}

					</ul>
				</div>
			</div>

		</nav>
	);
};
