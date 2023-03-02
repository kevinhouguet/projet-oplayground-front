import React from "react";
import logoOP from "../../assets/logoOP.png";
import { Link, useLocation } from "react-router-dom";

import BurgerMenu from "./burgerMenu";
import QuitBtn from "./quitBtn";
import SubscriptionBtn from "../HomePage/subscriptionBtn";
import ConnexionBtn from "../HomePage/connexionBtn";

import { string } from "prop-types";

const Header = (props) => {

	const { username, isLogin, onLogout } = props;

	const location = useLocation();
	const home = location.pathname === "/";
	const subLogPage = location.pathname === "/connexion" || location.pathname === "/inscription";

	return (
		<header className="navbar bg-primary text-primary-content p-5 flex justify-between">
			<Link to="/">
				<img src={logoOP} className="btn btn-ghost normal-case text-xl pointer-events-none" alt="Logo oplayground" />
			</Link>
			<div className="flex-1 flex justify-end">
				{/* comportement des elements du header si l'user n'est pas connecté et sur les routes accueil, subscription ou connexion*/}
				{/* si l'user n'est pas connecté */}
				{!username && !(home || subLogPage) && (
					<>
						<Link to={"/inscription"}>
							<button className="btn btn-secondary py-4 px-8 mx-2 flex items-center ">
								inscription
							</button>
						</Link>
						<Link to={"/connexion"}>
							<button className="btn btn-secondary py-4 px-8 flex items-center ">
								Connexion
							</button>
						</Link>
					</>
				)}
				{username && (
					<div className="flex items-center gap-6">
						<BurgerMenu username={username} isLogin={isLogin} />
						<QuitBtn onLogout={onLogout} />
					</div>
				)}
			</div>
		</header>
	);

};

export default Header;

Header.propTypes = {
	username: string.isRequired,
	isLogin: string.isRequired,
};
