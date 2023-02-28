import React from "react";
import logoOP from "../../assets/logoOP.png";
import { Link } from "react-router-dom";

const Header = () => (
	<header className="navbar bg-primary text-primary-content p-5">
		<Link to="/">
			<img src= {logoOP}  className="btn btn-ghost normal-case text-xl pointer-events-none" alt="Logo oplayground" />
		</Link>

		{/* <button className="btn btn-active">Button</button> */}
	</header>
);
export default Header;
