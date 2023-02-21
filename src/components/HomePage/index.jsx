import React from "react";

const HomePage = () => (
	<div className="h-56  grid gap-10 content-center">
		<div className="flex justify-evenly">
			<button className="btn btn-primary">Connexion</button>
			<button className="btn btn-primary">inscription</button>
		</div>
		<div className="flex justify-center">
			<input type="text" placeholder="Entrez votre adresse" className="input input-bordered input-secondary input-md w-full max-w-xs" />
		</div>
	</div>

);
export default HomePage;
