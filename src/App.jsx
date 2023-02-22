import React from "react";
// import { useState } from "react";

//import composant
import Header from "./components/Header";
import Footer from "./components/Footer";
import Inscription from "./components/Inscription";
// import HomePage from "./components/HomePage";
// import Team from "./components/Team";


const App = () => {

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Inscription />
			{/* <HomePage /> */}
			{/* <Team /> */}
			<Footer />
		</div>
	);
};

export default App;
