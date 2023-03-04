import React from "react";
import { Link } from "react-router-dom";

const ConnexionBtn = () => {

	return (
		<div className="flex gap-8">
			<Link to={"/connexion"}>
				<button className="btn btn-primary py-4 px-8 flex items-center justify-center">
                Connexion
				</button>
			</Link>
		</div>
	);
};

export default ConnexionBtn;

