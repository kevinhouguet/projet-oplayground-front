import React from "react";
import { FaTwitter, FaGithub, FaLinkedin  } from "react-icons/fa";

import Loup from "../../assets/Loup.jpg";
import Kevin from "../../assets/Kevin.jpg";
import Gael from "../../assets/Gael.jpg";
import Said from "../../assets/Said.jpg";
import Adim from "../../assets/Adim.jpg";


const Team = () => (
	<div className="">
		<h1 className="text-5xl font-bold text-center pt-20">
            Qui sommes-nous ?
		</h1>

		<div className="flex flex-row justify-evenly p-20 sm:flex-wrap">
			<div className="card card-compact max-w-2/3 bg-base-100 shadow-2xl py-2 transform hover:scale-110 transition duration-300 sm:mb-5">
				<div className="flex justify-center flex-col items-center ">
					<h2 className="text-2xl ">Kevin Houguet</h2>

					<img
						src={Kevin}
						className="rounded-2xl w-60 h-55 p-2"
						alt="Kevin Houguet"
					/>

					<div className="flex flex-col items-center text-lg ">
						<p> Développeur back</p>
						<p> Product owner</p>
						<p> Référent Git</p>
					</div>
					<div className="flex space-x-4 m-auto p-3">
						<a className="link hover:link-primary ">
							<FaTwitter />
						</a>
						<a className="link hover:link-primary">
							<FaGithub />
						</a>
						<a className="link hover:link-primary">
							<FaLinkedin />
						</a>
					</div>
				</div>
			</div>

			<div className="card card-compact max-w-2/3 bg-base-100 shadow-2xl py-2 transform hover:scale-110 transition duration-300 sm:mb-5">
				<div className="flex justify-center flex-col items-center ">
				
					<h2 className="text-2xl ">
                    Adim Zribi
					</h2>
					<img src= {Adim}  className="rounded-2xl w-60 h-55 p-2 mt-5" alt="Adim Zribi" />
					<div className="flex flex-col items-center text-lg ">
						<p> Développeur back</p>
						<p> Lead Dev Back</p>
					</div>
					<div className="flex space-x-4 m-auto p-3">
						<a className="link hover:link-primary "> <FaTwitter /> </a>
						<a className="link hover:link-primary"> <FaGithub /> </a>
						<a className="link hover:link-primary"> <FaLinkedin /> </a>
					</div>
				</div>
			</div>

			<div className="card card-compact max-w-2/3 bg-base-100 shadow-2xl py-2 transform hover:scale-110 transition duration-300 sm:mb-5">
				<div className="flex justify-center flex-col items-center ">
				
					<h2 className="text-2xl ">
                    Loup Esteban
					</h2>
					<img src= {Loup}  className="rounded-2xl w-60 h-55 p-2 " alt="Loup Esteban" />
					<div className="flex flex-col items-center text-lg ">
						<p> Développeur front</p>
						<p> Scrum Master</p>
					</div>
					<div className="flex space-x-4 m-auto p-3">
						<a className="link hover:link-primary "> <FaTwitter /> </a>
						<a className="link hover:link-primary"> <FaGithub /> </a>
						<a className="link hover:link-primary"> <FaLinkedin /> </a>
					</div>
				</div>
			</div>

			<div className="card card-compact max-w-2/3 bg-base-100 shadow-2xl py-2 transform hover:scale-110 transition duration-300 sm:mb-5">
				<div className="flex justify-center flex-col items-center ">
				
					<h2 className="text-2xl ">
                    Saïd Mohamed
					</h2>
					<img src= {Said}  className="rounded-2xl w-60 h-70 p-2 mt-5 " alt="Saïd Mohamed" />
					<div className="flex flex-col items-center text-lg ">
						<p> Développeur front</p>
						<p> Lead Dev Front</p>
					</div>
					<div className="flex space-x-4 m-auto p-3">
						<a className="link hover:link-primary "> <FaTwitter /> </a>
						<a className="link hover:link-primary"> <FaGithub /> </a>
						<a className="link hover:link-primary"> <FaLinkedin /> </a>
					</div>
				</div>
			</div>

			<div className="card card-compact max-w-2/3 bg-base-100 shadow-2xl py-2 transform hover:scale-110 transition duration-300 sm:mb-5">
				<div className="flex justify-center flex-col items-center ">
				
					<h2 className="text-2xl ">
                    Gaël Amand
					</h2>
					<img src= {Gael}  className="rounded-2xl w-60 h-55 p-2 " alt="Gaël Amand" />
					<div className="flex flex-col items-center text-lg ">
						<p> Développeur front</p>
						<p> Référent Technos</p>
					</div>
					<div className="flex space-x-4 m-auto p-3">
						<a className="link hover:link-primary "> <FaTwitter /> </a>
						<a className="link hover:link-primary"> <FaGithub /> </a>
						<a className="link hover:link-primary"> <FaLinkedin /> </a>
					</div>
				</div>
			</div>
		</div> 
	</div>
);
export default Team;
