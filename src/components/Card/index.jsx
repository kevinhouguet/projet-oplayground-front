import React from "react";
import basketball from "../../assets/basketball.jpg";
// import Ligneshorizontales from "../../assets/Ligneshorizontales.jpg";

const Header = () => (
	
	<div className="min-h-screen bg-cover bg-center flex flex-wrap justify-center bg-[url('./assets/white-painted-wall-texture-background.jpg')] p-10">
		<div className="card lg:card-side bg-base-100 shadow-xl w-9/12 m-10">
			<img src={basketball} className="rounded-2xl w-1/3 h-110" alt="Album"/>
			<div className="card-body">
				<h2 className="card-title">SALLE MULTISPORTS DE PONT-DE-L'ISERE</h2>
				<p className="mt-8 text-xl ">Surface : Gymnase</p>
				<p className="text-xl">Adresse : Avenue du canal</p>
				<p className="text-xl">26600 PONT DE L'ISERE</p>
				<div className="card-actions justify-end">
					<a href="/detail-terrain">
						<button className="btn btn-primary py-2 px-4 text-lg">Plus d'information</button> 
					</a>
				</div>
			</div>
		</div>

		<div className="card lg:card-side bg-base-100 shadow-xl w-9/12 m-10">
			<img src={basketball} className="rounded-2xl w-1/3 h-110" alt="Album"/>
			<div className="card-body">
				<h2 className="card-title mt-3">SALLE MULTISPORTS DE PONT-DE-L'ISERE</h2>
				<p className="mt-8 text-xl ">Surface : Gymnase</p>
				<p className="text-xl">Adresse : Avenue du canal</p>
				<p className="text-xl">26600 PONT DE L'ISERE</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary py-2 px-4 text-lg">Plus d'information</button>
				</div>
			</div>
		</div>

		<div className="card lg:card-side bg-base-100 shadow-xl w-9/12 m-10">
			<img src={basketball} className="rounded-2xl w-1/3 h-110" alt="Album"/>
			<div className="card-body">
				<h2 className="card-title mt-3">SALLE MULTISPORTS DE PONT-DE-L'ISERE</h2>
				<p className="mt-8 text-xl ">Surface : Gymnase</p>
				<p className="text-xl">Adresse : Avenue du canal</p>
				<p className="text-xl">26600 PONT DE L'ISERE</p>
				<div className="card-actions justify-end">
					<button className="btn btn-primary py-2 px-4 text-lg">Plus d'information</button>
				</div>
			</div>
		</div>

		
	</div>

);
export default Header;
