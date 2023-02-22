import React from "react";
import { useState } from "react";
import {AiFillEyeInvisible, AiFillEye} from "react-icons/ai";

const Inscription = () => {

	const [open, setOpen] = useState(false);
	// handle toggle
	const toggle = () => {
		setOpen(!open);
	};

	const [openbis, setOpenbis] = useState(false);
	// handle toggle
	const togglebis = () => {
		setOpenbis(!openbis);
	};

	return(

		<div className="m-auto relative">

			<h1 className="flex justify-center p-6 text-2xl">Inscription</h1>
			
			<form className="flex flex-col gap-1 form-control w-full max-w-xs relative">
				<label className="label-text-xl"> Adresse mail* : </label>
				<input className="input input-warning w-full max-w-xs" type="text"/>

				<label className="label-text-xl"> Username* : </label>
				<input className="input input-warning w-full max-w-xs" type="text"/>

				<label className="label-text-xl"> Mot de passe* </label>
				<input className="input input-warning w-full max-w-xs" type={(openbis === false)? "password" : "text" }/>

				<label className="label-text-xl"> Confirmation mot de passe* </label>
				<input className="input input-warning w-full max-w-xs" type={(open === false)? "password" : "text" }/>

				<div className="text-2xl absolute bottom-3 right-3">
					{
						(open === false)? <AiFillEyeInvisible onClick={toggle}/>:<AiFillEye onClick={toggle}/>
					}
				</div>

				<div className="text-2xl absolute bottom-[90px] right-3">
					{
						(openbis === false)? <AiFillEyeInvisible onClick={togglebis}/>:<AiFillEye onClick={togglebis}/>
					}
				</div>

			</form>

			<div className="flex justify-center">
				<button className="btn btn-primary my-7 " type="button"> Inscription </button>
			</div>

		</div>

	);};


export default Inscription;
