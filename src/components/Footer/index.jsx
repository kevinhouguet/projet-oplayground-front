/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaTwitter, FaFacebook, FaGithub, FaInstagram  } from "react-icons/fa";

const Footer = () => (
	<footer className="footer bg-primary text-primary-content mt-auto p-5 flex justify-around">
		<div>
			<a href="/"><span className="footer-title text-3xl">O'playground</span></a>
			<a href="/qui-sommes-nous" className="link link-hover">Qui sommes-nous ?</a>
			<a className="link link-hover">Contact : admin@terrainsport.com</a>
			<a className="link link-hover">Conditions générales</a>
		</div>
		
		<div>
			<span className="footer-title text-2xl">Nos réseaux</span>
			<div className="flex space-x-4 m-auto">
				<a className="link link-hover"> <FaFacebook /> </a>
				<a className="link link-hover"> <FaTwitter /> </a>
				<a className="link link-hover"> <FaGithub /> </a>
				<a className="link link-hover"> <FaInstagram /> </a>
			</div>
		</div>
	</footer>
);

export default Footer;
