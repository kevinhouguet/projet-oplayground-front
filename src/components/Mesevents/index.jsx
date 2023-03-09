import axios from "axios";
import React, { useEffect, useState } from "react";

import EventForm from "./eventForm";

const Mesevents = () => {
	const [userEvents, setUserEvents] = useState([]);

	const updateEvents = () => {		
		axios
			.get("https://oplaygroundapi.herokuapp.com/api/events", {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
				},
			})
			.then((response) => {
				setUserEvents(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	useEffect(() => {
		updateEvents();
	}, []);

	return (
		<div className="h-screen bg-cover bg-center bg-[url('./assets/white-painted-wall-texture-background.jpg')]">
			<div className="flex flex-wrap justify-center h-screen overflow-y-auto mb-5">
				{userEvents.map((userEvent) => <EventForm key={userEvent.id} userEvent={userEvent} />)}
			</div>
		</div>
	);
};

export default Mesevents;
