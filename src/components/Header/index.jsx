import React from "react";
import logoOP from "../../assets/logoOP.png";
import { Link, useLocation } from "react-router-dom";

import BurgerMenu from "./burgerMenu";
import QuitBtn from "./quitBtn";

import { func } from "prop-types";

const Header = ({ onLogout }) => {

	const location = useLocation();
	const home = location.pathname === "/";
	const subLogPage = location.pathname === "/connexion" || location.pathname === "/inscription";

	return (
		<header className="bg-primary flex flex-col items-center">
			{
				localStorage.getItem("accessToken")
					&& (
					// <div className="flex items-center gap-6 sm:flex-col">
						<div className="flex justify-between w-full">
							<BurgerMenu />
							<QuitBtn onLogout={onLogout} />
						</div>
					// </div>
					)}
			{/* <header className="navbar bg-primary text-primary-content p-5 flex justify-between sm:justify-center"> */}
			<Link to="/">
				{/* <img src={logoOP} className="btn btn-ghost normal-case text-xl pointer-events-none sm: w-full" alt="Logo oplayground" /> */}
				<img src={logoOP} className="btn btn-ghost normal-case text-xl pointer-events-none" alt="Logo oplayground" />
			</Link>
			<div className="flex-1 flex justify-end">
				{/* comportement des elements du header si l'user n'est pas connecté et sur les routes accueil, subscription ou connexion*/}
				{/* si l'user n'est pas connecté */}
				{
					!localStorage.getItem("accessToken") 
					&& 
					!(home || subLogPage) 
					&& 
					(
						<>
							<Link to={"/inscription"}>
								<button className="btn btn-secondary py-4 px-8 mx-2 flex items-center">
								Inscription
								</button>
							</Link>
							<Link to={"/connexion"}>
								<button className="btn btn-secondary py-4 px-8 flex items-center mr-2">
								Connexion
								</button>
							</Link>
						</>
					)}
			</div>
		</header>
	);

};

export default Header;

Header.propTypes = {
	onLogout: func.isRequired,
};
