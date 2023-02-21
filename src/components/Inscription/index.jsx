import React from "react";

const Inscription = () => {

	// const passwordToggle = document.querySelector(".js-password-toggle");

	// passwordToggle.addEventListener("change", function() {
	// 	const password = document.querySelector(".js-password"),
	// 		passwordLabel = document.querySelector(".js-password-label");

	// 	if (password.type === "password") {
	// 		password.type = "text";
	// 		passwordLabel.innerHTML = "hide";
	// 	} else {
	// 		password.type = "password";
	// 		passwordLabel.innerHTML = "show";
	// 	}

	// 	password.focus();
	// });

	return(
		<div className="m-auto">

			<h1 className="flex justify-center p-6 text-2xl">Inscription</h1>
			
			<form className="flex flex-col gap-1 form-control w-full max-w-xs">
				<label className="label-text-xl"> Adresse mail* : </label>
				<input className="input input-warning w-full max-w-xs" id="adressemail" type="text"/>

				<label className="label-text-xl"> Username* : </label>
				<input className="input input-warning w-full max-w-xs" id="username" type="text"/>

				<label className="label-text-xl" htmlFor="password"> Mot de passe* </label>
				<div className="relative w-full">
					<div className="absolute inset-y-0 right-0 flex items-center px-2">
						<input className="hidden js-password-toggle" id="toggle" type="checkbox" />
						{/* <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" htmlFor="toggle">show</label> */}
					</div>
					<input className="input input-warning w-full max-w-xs js-password" id="password" type="password"/>
				</div>

				<label className="label-text-xl" htmlFor="password"> Confirmation mot de passe* </label>
				<div className="relative w-full">
					<div className="absolute inset-y-0 right-0 flex items-center px-2">
						<input className="hidden js-password-toggle" id="toggle" type="checkbox" />
						{/* <label className="bg-gray-300 hover:bg-gray-400 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label" htmlFor="toggle">show</label> */}
					</div>
					<input className="input input-warning w-full max-w-xs js-password" id="password" type="password"/>
				</div>
			</form>
			<div className="flex justify-center">
				<button className="btn btn-secondary my-7 " type="button"> Inscription </button>
			</div>

		</div>

	);};


export default Inscription;
