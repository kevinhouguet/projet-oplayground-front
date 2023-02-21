import React from "react";
// import { useState } from "react";
import "./App.css";

//import composant
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
const App = () => {

	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<Main />
			<Footer />
		</div>
	);
};

export default App;
