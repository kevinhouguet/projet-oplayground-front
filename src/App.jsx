import React from "react";
// import { useState } from "react";
import "./App.css";

//import composant
import Header from "./components/Header";
import Footer from "./components/Footer";
// import HomePage from "./components/HomePage";
import Inscription from "./components/Inscription";


const App = () => {

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Inscription />
      {/*<HomePage />*/}
			<Footer />
		</div>
	);
};

export default App;
