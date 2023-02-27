import React from "react";
import logoOP from "../../assets/logoOP.png";
import BurgerMenu from "./burgerMenu";

const Header = () => (
	<header className="navbar bg-primary text-primary-content p-5 flex justify-between">
		<a href="/">
			<img src= {logoOP}  className="btn btn-ghost normal-case text-xl pointer-events-none" alt="Logo oplayground" />
		</a>
		<BurgerMenu />

		{/* <button className="btn btn-active">Button</button> */}
	</header>
);
export default Header;
