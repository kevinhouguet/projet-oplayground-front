import React from "react";
import logoOP from "../../assets/logoOP.png";
import { Link } from "react-router-dom";
import BurgerMenu from "./burgerMenu";
import { string, bool } from "prop-types";

const Header = (props) => {

	const { username, isLogin } = props;

	return (
		<header className="navbar bg-primary text-primary-content p-5 flex justify-between">
		<Link to="/">
			<img src= {logoOP}  className="btn btn-ghost normal-case text-xl pointer-events-none" alt="Logo oplayground" />
		</Link>
		<BurgerMenu username={username} isLogin={isLogin} />
		</header>
	);

};
export default Header;

Header.propTypes = {
	username: string.isRequired,
	isLogin: string.isRequired,
};
