import React, { useState } from "react";

//recupérer en props la ville auquel est associé l'événement
const EventCreation = () => {
	const [eventName, setEventName] = useState("");
	const [eventDate, setEventDate] = useState("");
	const [eventTime, setEventTime] = useState("");

	const handleSubmit = (event) => {
		event.preventDefault();

		const timestamp = Date.parse(`${eventDate} ${eventTime}`);
		// Envoyer les informations pour créer l'événement
		console.log("Nom de l'événement :", eventName);
		console.log("timestamp:", timestamp);
	};

	const handleCancel = () => {
		// Annuler la création de l'événement
		console.log("Création de l'événement annulée");
	};

	return (
		<form onSubmit={handleSubmit}>
			<div className="nameSection pb-3 flex justify-center">
				<label>
					<h1 className="flex justify-center">Nom de l&apos;événement :</h1>
					<input className="input input-warning w-auto max-w-xs " type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} />
				</label>
			</div>
			<div className="dateAndTimeSection flex justify-center">
				<label>
					Date de l&apos;événement :
					<input className="rounded-md" type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
				</label>
				<label>
					Heure de l&apos;événement :
					<input className="rounded-md" type="time" value={eventTime} onChange={(e) => setEventTime(e.target.value)} />
				</label>

			</div>
			<div className="buttonSection py-4 flex justify-evenly">
				<button className="btn btn-primary" type="submit">Valider</button>
			</div>
			<div className="buttonSection py-4 flex justify-evenly">
				<button onClick={handleCancel()} className="btn btn-primary" type="reset">Annuler</button>
			</div>
		</form>
	);
};

export default EventCreation;
