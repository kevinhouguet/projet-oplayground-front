import React from "react";
import logoOP from "../../assets/logoOP.png";
import { Link } from "react-router-dom";
import BurgerMenu from "./burgerMenu";

const Header = () => (
	<header className="navbar bg-primary text-primary-content p-5 flex justify-between">
	<Link to="/">
			<img src= {logoOP}  className="btn btn-ghost normal-case text-xl pointer-events-none" alt="Logo oplayground" />
	</Link>
		<BurgerMenu />

	</header>
);
export default Header;
