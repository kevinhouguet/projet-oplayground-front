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
import EditMyProfil from "./components/EditMyProfile";
import MyProfil from "./components/MyProfil";
import Team from "./components/Team";
import Error from "./components/Error";
import Card from "./components/Card";
import Details from "./components/Details";
import CGU from "./components/CGU";
import EventCreation from "./components/Event/EventCreation";
import Mesevents from "./components/Mesevents";

const App = () => {
	const [checked, setChecked] = useState({ checked: false });
	const [open, setOpen] = useState(false);
	const [openbis, setOpenbis] = useState(false);
	const [token, setToken] = useState("");
	const [username, setUsername] = useState("");

useEffect(() => {
	const accessToken = localStorage.getItem("accessToken");
	if (accessToken) {
		setToken(accessToken);
		const { username } = jwt_decode(accessToken);
		setUsername(username);
	}
	}, []);
	
	const handleChange = (event) => {
		setChecked({ checked: event.target.checked });
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
	};

	return (
        <div className="flex flex-col min-h-screen">
			<Header />
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
				<Route path={'/qui-sommes-nous'} element={<Team />} />
				<Route path="/connexion" element={
					<Login
						toggle={toggle}
						open={open}
						username={username}
						setToken={setToken}
						setUsername={setUsername}
						onLogout={logout}
						token={token}
					/>
				} />
        		<Route path="/mon-profil-edit" element={<EditMyProfil />} />
				<Route path="/mon-profil" element={<MyProfil />} />
				<Route path="/liste-des-terrains" element={<Card />} />
				<Route path="/detail-terrain" element={<Details />} />
				<Route path="/creation-evenement" element={<EventCreation />} />
				<Route path="/liste-des-evenements" element={<Mesevents />} />
				<Route path="/conditions-generales" element={<CGU />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
    );
};

export default App;
