import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
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
		<div className="body">
			<div className="text-center mt-5">
				<h1>Welcome</h1>
			</div>
		</div>
	);
};
