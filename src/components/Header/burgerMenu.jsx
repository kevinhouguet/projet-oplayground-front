import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import menuBurger from "../../assets/menuBurger_white.svg";

const BurgerMenu = () => {
	const [username, setUsername] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const response = () => {
			axios.get("https://oplaygroundapi.herokuapp.com/api/users", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
				.then((response) => {
					setUsername(response.data.username);
				})
				.catch((error) => {
					console.error(error);
				});
		};

		response();
	}, []);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		// <div className="burgerMenu dropdown dropdown-end bg-secondary rounded-xl">
		<div className="burgerMenu">
			<label
				// tabIndex={0}
				// className="btn btn-ghost rounded-btn"
				className="btn btn-ghost box-content"
				onClick={handleClick}
			>
				{
					localStorage.getItem("accessToken")
						?
						// <span>Bonjour {username} {/*&#127936;*/}</span>
						<img className="w-8" src={menuBurger} alt="menu_burger" />
						:
						""
				}
			</label>
			<ul
				// tabIndex={0}
				className={`menu dropdown-content p-0 shadow bg-secondary-focus rounded-box w-full mt-4 ${isOpen ? "block" : "hidden"
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
