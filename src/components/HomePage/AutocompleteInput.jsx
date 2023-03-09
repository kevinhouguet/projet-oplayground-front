import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AutocompleteInput() {

	const [searchTerm, setSearchTerm] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [selectedSuggestion, setSelectedSuggestion] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		if (searchTerm !== "") {
			axios
			//   limite la suggestion de recherche à 5 propositions
				.get(`https://geo.api.gouv.fr/communes?nom=${searchTerm}&fields=code,nom,codesPostaux&limit=5`)
				.then((response) => {
					setSuggestions(response.data);
				})
				.catch((error) => {
					console.log(error);
				});
		} else {
			setSuggestions([]);
		}
	}, [searchTerm]);

	const handleInputChange = (event) => {
		setSearchTerm(event.target.value);
		setSelectedSuggestion(null);
	};

	const handleSuggestionClick = (suggestion) => {
		setSelectedSuggestion(suggestion);
		setSearchTerm(suggestion.nom);
		setSuggestions([]);
	};

	function handleSubmit(event) {
		event.preventDefault();
		const selectedCodePostal = selectedSuggestion ? selectedSuggestion.codesPostaux[0] : "";
		axios.get(`https://oplaygroundapi.herokuapp.com/api/terrains?commune="${searchTerm}"&codepostal=${selectedCodePostal}`)
			.then((response) => {
				const objectData = response.data;
				navigate("/liste-des-terrains", { state: objectData } );
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return (
		<form onSubmit={handleSubmit} className="">
			<input
				className="input input-bordered input-secondary mr-2"
				placeholder="Entrez une ville..."
				type="text"
				value={selectedSuggestion ? `${selectedSuggestion.nom} - ${selectedSuggestion.codesPostaux[0]}` : searchTerm}

				onChange={handleInputChange}/>

			<button className="btn btn-primary " type="submit"> Rechercher </button>

			{suggestions.length > 0 && selectedSuggestion === null && (
				<ul className="absolute z-10 mt-2 w-60 bg-white rounded-md shadow-lg">
					{suggestions.map((suggestion) => (
						<li
							className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
							key={suggestion.code}
							onClick={() => handleSuggestionClick(suggestion)}
						>
							{suggestion.nom} - {suggestion.codesPostaux[0]}
						</li>
					))}
				</ul>
			)}
		</form>
	);
}

export default AutocompleteInput;
