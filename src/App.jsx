import React from "react";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import composant
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Inscription from "./components/Inscription";
import Login from "./components/Login";
import MyProfil from "./components/MyProfile";
import Team from "./components/Team";
import Error from "./components/Error";
import axios from "axios";

const App = () => {
	const [idUser, setIdUser] = useState();
	const [username, setUsername] = useState("");
	const [checked, setChecked] = useState({ checked: false });
	const [open, setOpen] = useState(false);
	const [openbis, setOpenbis] = useState(false);
	
	const handleChange = (event) => {
		setChecked({ checked: event.target.checked });
	};
	
	const toggle = () => {
		setOpen(!open);
	};
	
	const togglebis = () => {
		setOpenbis(!openbis);
	};
	
	const onSubmit = (data) => {
		axios.post("https://oplaygroundapi.herokuapp.com/api/users", data)
			.then((response) => {
				setIdUser(Number(response.data.id));
				setUsername(response.data.username);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Routes>	
				<Route path="/" element={<HomePage />} />
				<Route path="/inscription" element={
					<Inscription 
						idUser={idUser} 
						username={username} 
						checked={checked} 
						onChange={handleChange} 
						toggle={toggle} 
						togglebis={togglebis} 
						onSubmit={onSubmit} 
						open={open}
						openbis={openbis}
					/>
				} />
				<Route path="/qui-sommes-nous" element={<Team />} />
				<Route path="/connexion" element={<Login />} />
				<Route path="/mon-profil" element={<MyProfil />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
