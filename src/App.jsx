import React, { useEffect } from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import jwt_decode from "jwt-decode";

// import composant
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Inscription from "./components/Inscription";
import Login from "./components/Login";
import MyProfil from "./components/MyProfil";
import Team from "./components/Team";
import Error from "./components/Error";
import CGU from "./components/CGU";
import EventCreation from "./components/Event/EventCreation";
import Mesevents from "./components/MesEvents";
import PlaygroundsResult from "./components/PlaygroundsResult";
import PlaygroundDetails from "./components/PlaygroundDetails";


const App = () => {
	const [checked, setChecked] = useState({ checked: false });
	const [open, setOpen] = useState(false);
	const [openbis, setOpenbis] = useState(false);
	const [token, setToken] = useState("");
	const [username, setUsername] = useState("");
	const [idUser, setIdUser] = useState();
	const [isDisabled, setDisabled] = useState(true);
	const [data, setData] = useState([]);
	const [events, setEvents] = useState([]);

	const updateData = (newData) => {
		setData(newData);
	};


	useEffect(() => {
		const accessToken = localStorage.getItem("accessToken");
		if (accessToken) {
			setToken(accessToken);
			const { username, id } = jwt_decode(accessToken);
			setUsername(username);
			setIdUser(id);
		}
	}, []);

	if (token) {
		const removeToken = () => {
			logout();
		};
		setTimeout(removeToken, 2 * 60 * 60 * 1000); // Déconnexion automatique après 2 heures
	}


	const handleChange = (event) => {
		setChecked({ checked: event.target.checked });
	};

	const changeDisabled = () => {
		setDisabled(!isDisabled);
	};

	const toggle = () => {
		setOpen(!open);
	};

	const togglebis = () => {
		setOpenbis(!openbis);
	};

	const logout = () => {
		localStorage.removeItem("accessToken");
		setToken("");
		setUsername("");
		setIdUser();
		window.location.replace("/");
		alert("Vous êtes déconnecté, si besoin reconnectez-vous...");
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Header username={username} idUser={idUser} isLogin={token} onLogout={logout} />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/inscription" element={
					<Inscription
						checked={checked}
						onChange={handleChange}
						toggle={toggle}
						togglebis={togglebis}
						open={open}
						openbis={openbis}
					/>
				} />
				<Route path={"/qui-sommes-nous"} element={<Team />} />
				<Route path="/connexion" element={
					<Login
						toggle={toggle}
						open={open}
						username={username}
						idUser={idUser}
						setToken={setToken}
						setUsername={setUsername}
						onLogout={logout}
						token={token}
						setIdUser={setIdUser}
					/>
				} />
				<Route path="/mon-profil" element={
					<MyProfil 
						idUser={idUser} 
						username={username} 
						changeDisabled={changeDisabled}
						isDisabled={isDisabled} 
					/>
				} />
				<Route path="/liste-des-terrains" element={<PlaygroundsResult updateData={updateData} />} />
				<Route path="/detail-du-terrain/:id" element={<PlaygroundDetails data={data} idUser={idUser} setEvents={setEvents} events={events} />} />
				{/* appelle api sur nouvelle route du back id terrain-events*/}
				<Route path="/creation-evenement" element={<EventCreation />} />
				<Route path="/liste-des-evenements" element={<Mesevents idUser={idUser} events={events} />} />
				<Route path="/conditions-generales" element={<CGU />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
