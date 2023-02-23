import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

const Inscription = () => {

	const { handleSubmit, register, watch, formState : { errors } } = useForm();

	const pwd = watch("password");
	function onSubmit(data) {
		console.log(data);
	}

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

	return (

		<div className="m-auto">

			<h1 className="flex justify-center p-6 text-2xl">Inscription</h1>
			
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 form-control w-full max-w-xs relative">
			
				<label className="label-text-xl"> Adresse mail* : </label>
				<input className="input input-warning w-full max-w-xs" type="email" {...register("email", {required : true})} />
				{errors.email && <p className="text-red-600 text-sm"> Adresse mail non renseignée </p>}

				<label className="label-text-xl"> Username* : </label>
				<input className="input input-warning w-full max-w-xs" type="text" {...register("username", {required : true})} />
				{errors.username && <p className="text-red-600 text-sm"> Username non renseigné </p>}

				<label className="label-text-xl"> Mot de passe* : </label>
				<input className="input input-warning w-full max-w-xs" type={(open === false)? "password" : "text"} 
					{...register("password", {required : true, minLength : 8})}  />
				{errors.password && <p className="text-red-600 text-sm"> Mot de passe obligatoire et doit être supérieur 8 caractères</p>}


				<label className="label-text-xl"> Confirmation mot de passe* : </label>
				<input className="input input-warning w-full max-w-xs" type={(openbis === false)? "password" : "text"}
					{...register("passwordconfirm", {required : true, validate : value => value === pwd})} />
				{errors.passwordconfirm && <p className="text-red-600 text-sm"> Le mot de passe est différent et doit être supérieur 8 caractères </p>}
				
				<div className="text-2xl absolute bottom-[200px] right-3">
					{
						(open === false)? <AiFillEyeInvisible onClick={toggle}/>:<AiFillEye onClick={toggle}/>
					}
				</div>

				<div className="text-2xl absolute bottom-[120px] right-3">
					{
						(openbis === false)? <AiFillEyeInvisible onClick={togglebis}/>:<AiFillEye onClick={togglebis}/>
					}
				</div>

				<div className="flex justify-center">
					<button className="btn btn-primary my-7 " type="submit"> Inscription </button>
				</div>

			</form>
		</div>

	);};


export default Inscription;
