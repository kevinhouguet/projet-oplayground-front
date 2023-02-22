import React from "react";
import error from "../../assets/error.png";

const Error = () => (
	<div className="">
		<section className="flex justify-center flex-col items-center " id="404">
			<h1 className="text-primary text-2xl font-bold py-12 text-center">Retour en zone, la page que tu cherches n'existe pas</h1>
			<a href="/"><button className="btn btn-primary w-fit ">Retour a l'accueil</button></a> 
			<img src={error} alt="Erreur 404" />
		</section>
	</div>
);

export default Error;
