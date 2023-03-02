/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaTwitter, FaFacebook, FaGithub, FaInstagram  } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => (
	<footer className="footer bg-primary text-primary-content mt-auto p-5 flex justify-around">
		<div>
			<Link to="/"><span className="footer-title text-3xl">O'playground</span></Link>
			<Link to="/qui-sommes-nous" className="link link-hover">Qui sommes-nous ?</Link>
			<label htmlFor="my-modal" className="link link-hover">Contact</label>
			<input type="checkbox" id="my-modal" className="modal-toggle" />
			<div className="modal">
				<div className="modal-box w-full">
					<h3 className="font-bold text-4xl text-center">Contactez-nous !</h3>
					<p className="py-4 text-2xl text-center ">Vous souhaitez ajouter un terrain, nous faire une suggestion ou tout autre demande ? Alors contactez-nous à l'adresse mail ci-après : <a href="mailto:contact@playground.com" className="text-blue-500 hover:text-blue-700">contact@playground.com</a> </p>
					<div className="modal-action">
						<label htmlFor="my-modal" className="btn">Ok</label>
					</div>
				</div>
			</div>
			<Link to="/conditions-generales" className="link link-hover">Conditions générales</Link>
		</div>
		
		<div>
			<span className="footer-title text-2xl">Nos réseaux</span>
			<div className="flex space-x-4 m-auto">
				<Link className="link link-hover"> <FaFacebook /> </Link>
				<Link className="link link-hover"> <FaTwitter /> </Link>
				<Link className="link link-hover"> <FaGithub /> </Link>
				<Link className="link link-hover"> <FaInstagram /> </Link>
			</div>
		</div>
	</footer>
);

export default Footer;
