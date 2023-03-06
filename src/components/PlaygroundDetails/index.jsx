import React from "react";
import basketball from "../../assets/basketball.jpg";
import { FaMapMarkerAlt, FaInfo } from "react-icons/fa";
import EventCreation from "../Event/EventCreation";
import { array, number, func } from "prop-types";
import axios from "axios";


const PlaygroundDetails = ({ data, idUser, setEvents, events }) => {
	const item = data;
	console.log("item :", item);
	const createEvent = ({ nameEvent, date, time, maxPlayer }) => {
		const timestamp = Date.parse(`${date} ${time}`);

		axios.post(`https://oplaygroundapi.herokuapp.com/api/users/${idUser}/events`,
			{
				terrain: {
					name: item.name,
					surface: item.surface,
					type: item.type,
					address: item.address,
					zipCode: item.zipCode,
					city: item.city,
					playgroundId: item.playgroundId,
				},
				event: {
					name: nameEvent,
					start_date: timestamp,
					max_player: maxPlayer,
				}
			}, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
			.then((response) => {
				console.log(response);
				setEvents([...events, response.data]);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	// useEffect(() => {
	// 	const getPlayground = () => {
	// 		axios.get(`https://oplaygroundapi.herokuapp.com/api/terrains/${events.playgroundId}`, {
	// 			headers: {
	// 				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
	// 			},
	// 		})
	// 			.then((response) => {
	// 				setEvents(response.data);
	// 			})
	// 			.catch((error) => {
	// 				console.error(error);
	// 			});
	// 	};
	// 	getPlayground();
	// }, []);

	// console.log("after create events :", events);

	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('./assets/white-painted-wall-texture-background.jpg')]">
			<div className="card w-9/12 glass shadow-2xl p-10">
				<h1 className="text-center text-4xl pb-16"> {item.name}</h1>

				<div className="flex justify-evenly pb-10">
					<img src={basketball} className="rounded-2xl w-1/6" alt="Album" />
					<img src={basketball} className="rounded-2xl w-1/6" alt="Album" />
					<img src={basketball} className="rounded-2xl w-1/6" alt="Album" />
				</div>

				<h2 className="text-3xl pb-1">Adresse <span className="inline-block"> <FaMapMarkerAlt /> </span></h2>
				<p className="text-2xl">{item.address}</p>
				<p className="text-2xl pb-10">{item.zipCode} {item.city}</p>

				<h2 className="text-3xl pb-1"> Infos supplémentaires <span className="inline-block"> <FaInfo /> </span></h2>
				<p className="text-2xl ">Surface : {item.surface}</p>
				<p className="text-2xl"> Public : {item.public}</p>

				<h2 className="text-center text-2xl text-primary font-bold m-5"> Clique sur un évenement pour joindre l&apos;organisateur ! </h2>
				{ 
					events.map((event) => (
						<div key={event.id} className="flex flex-col h-80 overflow-y-scroll gap-1 mb-6">
							<label htmlFor="my-modal-3" className="btn h-20 text-xl">Le {event.start_date} au {event.stop_date} - {event.name}</label>
							<input type="checkbox" id="my-modal-3" className="modal-toggle" />
							<div className="modal">
								<div className="modal-box relative">
									<label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
									<h3 className="text-lg font-bold">Contact l&apos;organisateur pour réserver ta place !</h3>
									<p className="py-4 text-2xl">luna.martin@gmail.com</p>
								</div>
							</div>
						</div>
					))
				}

				<label htmlFor="my-modal-4" className="btn btn-primary">Créer un nouvel évenement</label>
				<input type="checkbox" id="my-modal-4" className="modal-toggle" />
				<div className="modal">
					<div className="modal-box relative">
						<label htmlFor="my-modal-4" className="btn btn-sm btn-circle absolute right-2 top-2">✕
						</label>
						<EventCreation createEvent={createEvent} />
					</div>
				</div>


			</div>
		</div>

	);
};

export default PlaygroundDetails;

PlaygroundDetails.propTypes = {
	data: array,
	idUser: number,
	setEvents: func,
	events: array,
};
