import React from "react";

const Login = () => {

	return (
		<div className="m-auto">
	
			<h1 className="flex justify-center p-6 text-2xl">Se connecter</h1>
				
			<form className="flex flex-col gap-1 form-control w-full max-w-xs">
				<label className="label-text-xl"> Adresse mail : </label>
				<input className="input input-warning w-full max-w-xs" id="adressemail" type="text"/>
	
				<label className="label-text-xl" htmlFor="password"> Mot de passe : </label>
				<div className="relative w-full">
					<div className="absolute inset-y-0 right-0 flex items-center px-2">
						<input className="hidden js-password-toggle" id="toggle" type="checkbox" />
					</div>
					<input className="input input-warning w-full max-w-xs js-password" id="password" type="password"/>
				</div>
			</form>
			<div className="flex justify-center">
				<button className="btn btn-primary my-7 " type="button"> Connexion </button>
			</div>
	
		</div>
	);
};

export default Login;
