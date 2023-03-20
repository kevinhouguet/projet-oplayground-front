import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";

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
import Mesevents from "./components/Mesevents";
import PlaygroundsResult from "./components/PlaygroundsResult";
import PlaygroundDetails from "./components/PlaygroundDetails";

const App = () => {

	// useEffect(function () {
	// 	localStorage.getItem("accessToken");
	// }, []);

	useEffect(function () {
		if (localStorage.getItem("accessToken")) {
			const removeToken = () => {
				logout();
			};
			setTimeout(removeToken, 2 * 60 * 60 * 1000); // Déconnexion automatique après 2 heures
		}
	}, []);

	const logout = () => {
		localStorage.removeItem("accessToken");
		window.location.replace("/");
		alert("Vous êtes déconnecté, si besoin reconnectez-vous...");
	};

	return (
		<div className="flex flex-col min-h-screen">
			<Header
				onLogout={logout}
			/>

			<Routes>

				<Route 
					path="/" 
					element={<HomePage />} 
				/>

				<Route
					path="/inscription"
					element={<Inscription />}
				/>

				<Route
					path="/connexion"
					element={<Login />}
				/>

				<Route
					path={"/qui-sommes-nous"} 
					element={<Team />} 
				/>

				<Route 
					path="/conditions-generales" 
					element={<CGU />} 
				/>

				<Route
					path="/liste-des-terrains"
					element={<PlaygroundsResult />}
				/>

				<Route 
					path="*" 
					element={<Error />} 
				/>

				{ 
					localStorage.getItem("accessToken") 
						?
						<>
							<Route
								path="/mon-profil"
								element={<MyProfil />}
							/>
        
							<Route 
								path="/detail-du-terrain/:id" 
								element={<PlaygroundDetails />}
							/>

							<Route 
								path="/liste-des-evenements" 
								element={<Mesevents />}
							/>
						</>
						:
						<Route
							path="*"
							element={<Error />}
						/>
				};

			</Routes>

			<Footer />
		</div>
	);
};

export default App;
