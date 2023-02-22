import React from "react";
// import { useState } from "react";
import { Route, Routes } from "react-router-dom";

// import composant
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Inscription from "./components/Inscription";
import Login from "./components/Login";
import Team from "./components/Team";
import Error from "./components/Error";

const App = () => {

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Routes>	
				<Route path="/" element={<HomePage />} />
				<Route path="/inscription" element={<Inscription />} />
				<Route path="/qui-sommes-nous" element={<Team />} />
				<Route path="/connexion" element={<Login />} />
				<Route path="*" element={<Error />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
