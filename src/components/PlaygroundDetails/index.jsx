import React from "react";
import basketball from "../../assets/basketball.jpg";
import { FaMapMarkerAlt, FaInfo } from "react-icons/fa";
import EventCreation from "../Event/EventCreation";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

const PlaygroundDetails = () => {
	const params = useParams();
	const modale4Ref = useRef();

	const [playgroundId, setPlaygroundId] = useState(params.id);
	const [playgroundData, setPlaygroundData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [eventName, setEventName] = useState("");
	const [eventDate, setEventDate] = useState("");
	const [eventTime, setEventTime] = useState("");
	const [maxPlayer, setMaxPlayer] = useState("");

	const clearForm = () => {
		setEventName("");
		setEventDate("");
		setEventTime("");
		setMaxPlayer("");
	};

	const closeModale4 = function () {
		modale4Ref.current.checked = false;
	};

	useEffect(function () {
		setPlaygroundId(params.id);
	}, []);

	useEffect(() => {
		if (!playgroundId) return;

		(async () => {
			try {
				const response = await axios.get(
					`https://oplaygroundapi.herokuapp.com/api/terrains/${playgroundId}`,
					{
						headers: {
							Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
						},
					}
				);
				setPlaygroundData(response.data);
				setIsLoading(false);
			} catch (error) {
				console.error(error);
			}
		})();
	}, [playgroundId]);

	const createEvent = ({ nameEvent, date, time, maxPlayer }) => {
		const timestamp = Date.parse(`${date} ${time}`);

		axios
			.post(
				"https://oplaygroundapi.herokuapp.com/api/events",
				{
					name: nameEvent,
					start_date: timestamp,
					max_player: maxPlayer,
					playgroundId: playgroundData.playgroundId,
				},
				{
					headers: {
						Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
					},
				}
			)
			.then((response) => {
				const updatedEvents = [...playgroundData.events];
				response.data.author_email = response.data.email;
				delete response.data.email;
				updatedEvents.push(response.data);
				setPlaygroundData({
					...playgroundData,
					events: updatedEvents,
				});

				closeModale4();
			})
			.catch((error) => {
				console.error(error);
			});
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('./assets/white-painted-wall-texture-background.jpg')]">
			{!isLoading && (
				<div className="card w-9/12 glass shadow-2xl p-10">
					<h1 className="text-center text-4xl pb-16">{playgroundData.name}</h1>
					<div className="flex justify-evenly pb-10">
						<img src={basketball} className="rounded-2xl w-1/6" alt="Album" />
						<img src={basketball} className="rounded-2xl w-1/6" alt="Album" />
						<img src={basketball} className="rounded-2xl w-1/6" alt="Album" />
					</div>
					<h2 className="text-3xl pb-1">
						Adresse
						<span className="inline-block">
							<FaMapMarkerAlt />
						</span>
					</h2>
					<p className="text-2xl">{playgroundData.address}</p>
					<p className="text-2xl pb-10">
						{playgroundData.zipCode} {playgroundData.city}
					</p>
					<h2 className="text-3xl pb-1">
						Infos supplémentaires
						<span className="inline-block">

							<FaInfo />
						</span>
					</h2>
					<p className="text-2xl ">Surface : {playgroundData.surface}</p>
					<p className="text-2xl"> Public : {playgroundData.public}</p>
					<h2 className="text-center text-2xl text-primary font-bold m-5">
						Clique sur un évenement pour joindre l&apos;organisateur !
					</h2>

					{
						playgroundData.events[0] 
						&& 
			(
				<div className="flex flex-col h-80 overflow-y-auto gap-1 mb-6">
					{playgroundData.events.map(function (event) {
						return (
							<div key={event.id}>
								<label
									htmlFor={`my-modal-3_${event.id}`}
									className="btn h-20 text-xl"
								>
									Le {event.start_date} au {event.stop_date} - {event.name}
								</label>
								<input
									type="checkbox"
									id={`my-modal-3_${event.id}`}
									className="modal-toggle"
								/>
								<div className="modal">
									<div className="modal-box relative">
										<label
											htmlFor={`my-modal-3_${event.id}`}
											className="btn btn-sm btn-circle absolute right-2 top-2"
										>
											✕
										</label>
										<h3 className="text-lg font-bold">
											Contact l&apos;organisateur pour réserver ta place !
										</h3>
										<p className="py-4 text-2xl">{event.author_email}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			)}
					<label htmlFor="my-modal-4" className="btn btn-primary" onClick={clearForm}>
						Créer un nouvel évenement
					</label>
					<input
						type="checkbox"
						id="my-modal-4"
						className="modal-toggle"
						ref={modale4Ref}
					/>
					<div className="modal">
						<div className="modal-box relative">
							<label
								htmlFor="my-modal-4"
								className="btn btn-sm btn-circle absolute right-2 top-2"
							>
								✕
							</label>
							<EventCreation 
								createEvent={createEvent} 
								eventName={eventName} 
								eventDate={eventDate}
								eventTime={eventTime}
								maxPlayer={maxPlayer}
								setEventName={setEventName}
								setEventDate={setEventDate}
								setEventTime={setEventTime}
								setMaxPlayer={setMaxPlayer}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default PlaygroundDetails;
