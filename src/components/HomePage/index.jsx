import React from "react";

const HomePage = () => (
	<div className="h-56 grid gap-10 content-center m-auto">
		<div className="flex gap-8">
			<a href="/connexion">
				<button className="btn btn-primary py-4 px-8 flex items-center justify-center">Connexion</button>
			</a>
			<a href="/inscription">
				<button className="btn btn-primary py-4 px-8 flex items-center justify-center">inscription</button>
			</a>
		</div>
		<div className="flex justify-around">
			<input type="text" placeholder="Entrez votre adresse" className="input input-bordered input-secondary input-md w-full max-w-xl" />
		</div>
	</div>

);
export default HomePage;
