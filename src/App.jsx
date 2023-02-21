import React from "react";
// import { useState } from "react";
import "./App.css";

//import composant
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inscription from "./components/Inscription";
function App() {

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Inscription />
			<Footer />
		</div>
	);
}

export default App;
