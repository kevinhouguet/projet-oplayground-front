import React from "react";
import { Link } from "react-router-dom";
import logoOP from "../../assets/logoOP.png";

const Header = () => (
	<header className="navbar bg-primary text-primary-content p-5">
		<Link to="/">
			<img src= {logoOP}  className="btn btn-ghost normal-case text-xl pointer-events-none" alt="Logo oplayground" />
		</Link>
	</header>
);
export default Header;
