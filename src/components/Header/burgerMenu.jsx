import React, { useState } from "react";
import { Link } from "react-router-dom";
import { string } from "prop-types";

const BurgerMenu = (props) => {
	const { username, isLogin } = props;

	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="burgerMenu dropdown dropdown-end bg-secondary rounded-xl">
			<label
				tabIndex={0}
				className="btn btn-ghost rounded-btn"
				onClick={handleClick}
			>
				{
					isLogin
						?
						<span>Bonjour {username} {/*&#127936;*/}</span>  
						:
						"Menu"
				}
			</label>
			<ul
				tabIndex={0}
				className={`menu dropdown-content p-2 shadow bg-secondary-focus rounded-box w-52 mt-4 ${isOpen ? "block" : "hidden"
				}`}
			>
				<li>
					<Link to="/mon-profil" onClick={handleClick}>
            Mon compte
					</Link>
				</li>
				<li>
					<Link to="/liste-des-evenements" onClick={handleClick}>
				Mes événements
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default BurgerMenu;

BurgerMenu.propTypes = {
	username: string.isRequired,
	isLogin: string.isRequired,
};
