import React from "react";
import logoOP from "../../assets/logoOP.png";
import { Link } from "react-router-dom";

import BurgerMenu from "./burgerMenu";
import QuitBtn from "./quitBtn";

import { string, func } from "prop-types";

const Header = (props) => {

	const { username, isLogin, onLogout } = props;

	return (
		<header className="navbar bg-primary text-primary-content p-5 flex justify-between">
			<Link to="/">
				<img src={logoOP} className="btn btn-ghost normal-case text-xl pointer-events-none" alt="Logo oplayground" />
			</Link>
			<div className="flex-1 flex justify-end">
				<BurgerMenu username={username} isLogin={isLogin} />
				<QuitBtn onLogout={onLogout} />
			</div>
		</header>
	);

};
export default Header;

Header.propTypes = {
	username: string.isRequired,
	isLogin: string.isRequired,
	onLogout: func.isRequired,
};
