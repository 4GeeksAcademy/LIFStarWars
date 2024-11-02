import React, {useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import People from "../component/People";
import Planets from "../component/Planets";
import Vehicles from "../component/Vehicles";

export const Home = () => {
	const{ actions } = useContext(Context);

	
	return (
	<div className="text-center mt-5 bg-dark" style={{ overflowY: "auto", height: "80vh" }}>
		<People/>
		<Planets/>
		<Vehicles/>
	</div>
	);
};
