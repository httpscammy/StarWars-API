import React, { useContext, useEffect } from "react";
import dogImage from "../../img/doggo.jpg";
import "../../styles/private.css"
import { Context } from "../store/appContext";
import { useNavigate } from "react-router-dom";

export const Private = () => {
	const {store, actions} = useContext(Context);
	const navigate = useNavigate();

	useEffect (() => {
		if (!store.token || store.token === "" || store.token === undefined){
			navigate("/login"), alert("You need to login first to see the private page")
		}
	})
	
	return (
		<div className="text-center mt-5">
			<h1>Welcome to the private browser!</h1>
			<p>
                Here is a picture of a doggo!
                <br />
				<img className="dog-pic" src={dogImage} />
			</p>
		</div>
	);
};
