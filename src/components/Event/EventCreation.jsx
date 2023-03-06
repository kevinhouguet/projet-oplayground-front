import React, { useState } from "react";
import { func } from "prop-types";
import { useForm } from "react-hook-form";

//recupérer en props la ville auquel est associé l'événement
const EventCreation = ({ createEvent }) => {
	const [eventName, setEventName] = useState("");
	const [eventDate, setEventDate] = useState("");
	const [eventTime, setEventTime] = useState("");
	const [maxPlayer, setMaxPlayer] = useState("");

	const { 
		handleSubmit,
		register,
	} = useForm();

	return (
		<form onSubmit={handleSubmit(createEvent)}>
			<div className="nameSection pb-3 flex justify-center">
				<label>
					<h1 className="flex justify-center">Nom de l&apos;événement :</h1>
					<input className="input input-warning w-auto max-w-xs " type="text" {...register("nameEvent", {required : true})} value={eventName} onChange={(e) => setEventName(e.target.value)} />
				</label>
			</div>
			<div className="dateAndTimeSection flex items-center flex-col">
				<label>
					Date de l&apos;événement :
					<input className="rounded-md" type="date" {...register("date", {required : true})} value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
				</label>
				<label>
					Heure de l&apos;événement :
					<input className="rounded-md" type="time" {...register("time", {required : true})} value={eventTime} onChange={(e) => setEventTime(e.target.value)} step="1800" />
				</label>
				<label>
					Nombre de joueurs max :
					<input className="rounded-md" type="number" min="1" max="22" {...register("maxPlayer", {required : true})} value={maxPlayer} onChange={(e) => setMaxPlayer(e.target.value)} />
				</label>

			</div>
			<div className="flex justify-center gap-10">
				<div className="buttonSection py-4 flex justify-evenly">
					<button className="btn btn-primary" type="submit" >Valider</button>
				</div>
			</div>

		</form>
	);
};

export default EventCreation;

EventCreation.propTypes = {
	createEvent: func,
};
