import React, { useContext } from "react";
import { Context } from "../store/appContext"
import { Link, useNavigate } from "react-router-dom";

import "../../styles/navbar.css"

export const Navbar = () => {
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();

	const handleLogout = () => {
		actions.logout();
		navigate("/login");
	}

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					{!store.token ? 
					<div>
					<Link to="/signup">
						<button className="btn btn-primary signup">Sign up</button>
					</Link>	
					<Link to="/login">
						<button className="btn btn-primary">Log in</button>
					</Link>	
					</div>
			:
					<button onClick={handleLogout} className="btn btn-primary">Logout</button>
			}
				</div>
			</div>
		</nav>
	);
};
