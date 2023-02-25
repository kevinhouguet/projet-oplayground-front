import React from "react";
import basketball from "../../assets/basketball.jpg";
import { FaMapMarkerAlt, FaInfo } from "react-icons/fa";


const Details = () => (
	<div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('./assets/white-painted-wall-texture-background.jpg')]">
		<div className="card w-9/12 glass shadow-2xl p-10">
			<h1 className="text-center text-4xl pb-16"> SALLE MULTISPORTS DE PONT-DE-L'ISERE</h1>

			<div className="flex justify-evenly pb-10">
				<img src={basketball} className="rounded-2xl w-1/6" alt="Album"/>
				<img src={basketball} className="rounded-2xl w-1/6" alt="Album"/>
				<img src={basketball} className="rounded-2xl w-1/6" alt="Album"/>
			</div>

			<h2 className="text-3xl pb-1">Adresse <span className="inline-block"> <FaMapMarkerAlt /> </span></h2>
			<p className="text-2xl">Avenue du canal</p>
			<p className="text-2xl pb-10">26600 PONT DE L'ISERE</p>
            
			<h2 className="text-3xl pb-1"> Infos supplémentaires <span className="inline-block"> <FaInfo /> </span></h2>
			<p className="text-2xl ">Surface : Gymnase</p>
			<p className="text-2xl"> Capacité : 10 personnes max </p>
			<p className="text-2xl"> Equipement à disposition : Sanitaires</p>
			<p className="text-2xl"> Horaires : 10:00 à 19:00 </p>

			<h2 className="text-center text-2xl text-primary font-bold"> Clique sur un évenement pour joindre l'organisateur ! </h2>
			<div className="flex flex-col h-80 overflow-y-scroll pt-10">
				<label htmlFor="my-modal-3" className="btn">Le 18/05/2023 à 12h Match d'entrainement</label>
				<input type="checkbox" id="my-modal-3" className="modal-toggle" />
				<div className="modal">
					<div className="modal-box relative">
						<label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
						<h3 className="text-lg font-bold">Congratulations random Internet user!</h3>
						<p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
					</div>
				</div>
			</div>
			<button className="btn btn-warning">Créer un évenement</button>
		</div>
	</div>

);
export default Details;
