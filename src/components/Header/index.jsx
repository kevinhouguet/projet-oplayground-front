import React from "react";
import logoOP from "../../assets/logoOP.png";
import "./styles.css";

const Header = () => (
	<header className="navbar bg-primary text-primary-content p-5">
		<a href="/">
			<img src= {logoOP}  className="btn btn-ghost normal-case text-xl pointer-events-none" alt="Logo oplayground" />
		</a>

		{/* <button className="btn btn-active">Button</button> */}
	</header>
);
export default Header;
