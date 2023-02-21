import React from "react";
// import { useState } from "react";
import "./App.css";

//import composant
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";

const App = () => (
	<div className="flex flex-col min-h-screen">
		<Header />
		<HomePage />
		<Footer />
	</div>
);

export default App;
