import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { object } from "prop-types";

const EventForm = ({userEvent}) => {
	const { register, handleSubmit } = useForm();

	const [startDate, setStartDate] = useState(userEvent.startDate);
	const [time, setTime] = useState(userEvent.startHour);
	const [eventName, setEventName] = useState(userEvent.name);
	const [playersnb, setPlayersnb] = useState(userEvent.max_player);
	const [isUpdated, setIsUpdated] = useState(false);
	const [isDisabled, setDisabled] = useState(true);

	const changeDisabled = () => {
		setDisabled(!isDisabled);
		setIsUpdated(!isUpdated);
	};

	const onUpdate = () => {
		const timestamp = Date.parse(`${startDate} ${time}`);

		axios.patch(`https://oplaygroundapi.herokuapp.com/api/events/${userEvent.id}`, {
			name: eventName,
			start_date: timestamp,
			max_player: playersnb,
			playgroundId: userEvent.playgroundId,
		},
		{
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		}
		)
			.then(() => {
				setIsUpdated(true);
				changeDisabled();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const onDelete = () => {
		axios.delete(`https://oplaygroundapi.herokuapp.com/api/events/${userEvent.id}`, {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then(() => {
				setIsUpdated(false);
				changeDisabled();
				window.location.href = "/liste-des-evenements";
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div
			className="card lg:card-side bg-base-100 shadow-xl w-30 m-10 text-center "
			key={userEvent.id}
		>
			<form onSubmit={handleSubmit(onUpdate)} >
				<div className="flex justify-center m-2 ">
					<button
						onClick={changeDisabled}
						type="button"
						className="btn btn-sm btn-secondary mt-5"
					>
						Editer mes événements
					</button>
				</div>
				<div className="flex justify-center m-2 ">
					<Link to={`/detail-du-terrain/${userEvent.playground_id}`}>
						<button
							type="button"
							className="btn btn-sm btn-secondary mt-5"
						>
						Accéder au terrain
						</button>
					</Link>
				</div>
				<div className="card-body flex flex-col items-center ">
					<h2 className="card-title text-2xl font-bold">Nom de l&apos;événement :</h2>
					<input className="input input-warning w-full text-xl" type="text" 
						placeholder={userEvent.name} 
						defaultValue={userEvent.name}
						{...register("name", { maxLength: 30 })} 
						disabled={isDisabled}
						onChange={(event) => setEventName(event.target.value)} 
					/>
					<p className="text-2xl font-bold">Débute à :</p>

					<input
						className="input input-warning w-full max-w-md text-xl"
						type="date"
						placeholder={userEvent.startDate} 
						defaultValue={userEvent.startDate}
						{...register("start_date")}
						disabled={isDisabled}
						onChange={(event) => setStartDate(event.target.value)}
					/>

					<input
						className="input input-warning w-full max-w-md text-xl"
						type="time"
						defaultValue={userEvent.startHour}
						{...register("time")}
						disabled={isDisabled}
						onChange={(event) => setTime(event.target.value)}
					/>

					<p className="text-2xl font-bold">Fini à :</p>
					<p className="text-xl text-left bg-gray-200 w-full rounded-lg h-12 pt-2 pl-2">{userEvent.stop_date}</p>

                

					<p className="text-2xl font-bold">
						Nombre maximum de joueurs :
					</p>

					<input
						className="input input-warning w-full max-w-md text-xl"
						type="number"
						defaultValue={userEvent.max_player}
						{...register("max_player")}
						disabled={isDisabled}
						onChange={(event) => setPlayersnb(event.target.value)}
					/>
				</div>
				{!isDisabled ? (
					<div className="btnContainer py-2 flex items-center justify-evenly">
						<input
							onClick={() => {}}
							className="btn btn-primary"
							type="submit"
							value="Valider"
						/>
						<Link to="/liste-des-evenements">
							<button className="btn btn-primary" onClick={changeDisabled}>
                            Annuler
							</button>
						</Link>
					</div>
				) : null}
				<label htmlFor="my-modal-6" className="btn btn-sm btn-secondary flex-col bg-primary w-2/3 mb-8 h-10">Supprimer l&apos;évènement</label>
				<input type="checkbox" id="my-modal-6" className="modal-toggle " />
				<div className="modal modal-bottom sm:modal-middle">
					<div className="modal-box">
						<h3 className="font-bold text-lg">Vous déclarez forfait ?</h3>
						<p className="py-2">Vous-êtes sur le point de supprimer votre évènement, êtes-vous certain de vouloir le supprimer ?</p>
						<div className="modal-action flex justify-center  ">
							<label onClick={() => onDelete()} htmlFor="my-modal-6" className="btn btn-sm btn-primary">Oui, je confirme</label>
							<label htmlFor="my-modal-6" className="btn btn-sm btn-secondary">Non, je refuse</label>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};


export default EventForm;



EventForm.propTypes = {
	userEvent: object,
};

/*
id: number,
	playground_id: string,
	max_player: number,
	member_id: number,
	startHour: string,
	name: string,
	stop_date: string,
	start_date: string,
	startDate: string,
	stopHour: string,
	stopDate: string,
*/
