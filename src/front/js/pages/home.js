import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const tokenCheck = store.token

	useEffect(
		() => {
		if(store.token && store.token!= "" && store.token != undefined) actions.getMessage();
		}, 
	[store.token]
	)

	return (
		<div className="text-center mt-5">
			<h1>Welcome</h1>
			<p>
				<img src={rigoImageUrl} />
			</p>
			{store.message && <div className="alert alert-info">
				{store.message}
			</div>}
			<p>
					<button onClick={() => {
						if(!tokenCheck) navigate("/login"), alert("First you must log in to see the private page.");
							else navigate ("/private")
						}}>
						Click here to see private page
					</button>
			</p>
		</div>
	);
};
