import React from "react";
import { func, string } from "prop-types";
import { useForm } from "react-hook-form";

//recupérer en props la ville auquel est associé l'événement
const EventCreation = ({ createEvent, setEventName, setEventDate, setEventTime, setMaxPlayer, eventName, eventDate, eventTime, maxPlayer }) => {

	const { handleSubmit, register } = useForm();

	return (
		<form onSubmit={handleSubmit(createEvent)}>
			<div className="nameSection pb-3 flex justify-center">
				<label>
					<h1 className="flex justify-center">Nom de l&apos;événement :</h1>
					<input
						className="input input-warning w-auto max-w-xs "
						type="text"
						placeholder={eventName}
						{...register("nameEvent", { required: true })}
						onChange={(e) => setEventName(e.target.value)}
					/>
				</label>
			</div>
			<div className="dateAndTimeSection flex items-center flex-col">
				<label>
          Date de l&apos;événement :
					<input
						className="rounded-md"
						type="date"
						placeholder={eventDate}
						{...register("date", { required: true })}
						onChange={(e) => setEventDate(e.target.value)}
					/>
				</label>
				<label>
          Heure de l&apos;événement :
					<input
						className="rounded-md"
						type="time"
						placeholder={eventTime}
						{...register("time", { required: true })}
						onChange={(e) => setEventTime(e.target.value)}
					/>
				</label>
				<label>
          Nombre de joueurs max :
					<input
						name="max"
						className="rounded-md"
						type="number"
						placeholder={maxPlayer}
						min="1"
						max="22"
						{...register("maxPlayer", { required: true })}
						onChange={(e) => setMaxPlayer(e.target.value)}
					/>
				</label>
			</div>
			<div className="flex justify-center gap-10">
				<div className="buttonSection py-4 flex justify-evenly">
					<button className="btn btn-primary" type="submit">
            Valider
					</button>
				</div>
			</div>
		</form>
	);
};

export default EventCreation;

EventCreation.propTypes = {
	createEvent: func,
	setEventName: func,
	setEventDate: func,
	setEventTime: func,
	setMaxPlayer: func,
	eventName: string,
	eventDate: string,
	eventTime: string,
	maxPlayer: string,
};
