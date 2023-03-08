import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
		<div className="burgerMenu dropdown dropdown-end bg-secondary rounded-xl">
			<label
				tabIndex={0}
				className="btn btn-ghost rounded-btn"
				onClick={handleClick}
			>
				{
					localStorage.getItem("accessToken")
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
