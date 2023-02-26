import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const HomePage = ({ options = ["Rennes", "Paris", "Lyon", "Saint-Malo"]}) => {

	const [value, setValue] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(false);
	const suggestions = options.filter(option => option.toLocaleLowerCase().includes(value.toLocaleLowerCase()));

	const autocompleteRef = useRef();

	const handleChange = event => {
		setValue(event.target.value);
	};

	const handleSuggestionClick = (suggestion) => {
		setValue(suggestion);
		setShowSuggestions(false);
	};

	useEffect(() => {
		const handleOutsideClick = (event) => {
			if (autocompleteRef.current && !autocompleteRef.current.contains(event.target)) {
				setShowSuggestions(false);
			}
		};
		document.addEventListener("click", handleOutsideClick);
		return () => {
			document.removeEventListener("click", handleOutsideClick);
		};
	}, []);

	return (
		<div className="bg-cover bg-center flex-1 flex h-screen bg-[url('./assets/basketball.jpg')]">
			<div className="h-full grid gap-10 m-auto">
				<div className="flex gap-8">
					<a href="/connexion">
						<button className="btn btn-primary py-4 px-8 flex items-center justify-center">Connexion</button>
					</a>
					<a href="/inscription">
						<button className="btn btn-primary py-4 px-8 flex items-center justify-center">inscription</button>
					</a>
				</div>

				<div className="flex justify-around flex-col" ref={autocompleteRef} style={{ position: "relative" }}>
					<input
						value={value}
						onChange={handleChange}
						type="text"
						placeholder="Entrez une ville..."
						onFocus={() => setShowSuggestions(true)}
						className="input input-bordered input-secondary input-md w-full max-w-xl"
					/>

					{showSuggestions && (
						<ul
							tabIndex={0}
							className="dropdown-content z-50 absolute left-0 top-full mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100"
							style={{ minWidth: "100%" }}
						>
							{suggestions.map(suggestion => (
								<li
									onClick={() => handleSuggestionClick(suggestion)}
									key={suggestion}
									className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
								>
									{suggestion}
								</li>
							))}
						</ul>
					)}
				</div>
			</div>
		</div>
	);
};

HomePage.propTypes = {
	options: PropTypes.array.isRequired,
};

export default HomePage;
