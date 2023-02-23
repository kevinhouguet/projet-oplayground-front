import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
	const {handleSubmit, register, formState : {errors}} = useForm();

	function onSubmit(data) {
		console.log(data);
	}

	const [open, setOpen] = useState(false);
	// handle toggle
	const toggle = () => {
		setOpen(!open);
	};

	return (
		<div className="m-auto">

			<h1 className="flex justify-center p-6 text-2xl">Se connecter</h1>
			
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 form-control w-full max-w-xs relative">
			
				<label className="label-text-xl"> Adresse mail* : </label>
				<input className="input input-warning w-full max-w-xs" type="email" {...register("email", {required : true})} />
				{errors.email && <p className="text-red-600 text-sm"> Adresse mail non renseignée </p>}

				<label className="label-text-xl"> Mot de passe* : </label>
				<input className="input input-warning w-full max-w-xs" type={(open === false)? "password" : "text"} 
					{...register("password", {required : true, minLength : 8})}  />
				{errors.password && <p className="text-red-600 text-sm"> Mot de passe obligatoire et doit être supérieur 8 caractères</p>}
				
				<div className="text-2xl absolute bottom-20 right-3">
					{
						(open === false) ? <AiFillEyeInvisible onClick={toggle}/> : <AiFillEye onClick={toggle}/>
					}
				</div>

				<div className="flex justify-center">
					<button className="btn btn-primary my-7 " type="submit"> Connexion </button>
				</div>

			</form>
		</div>
	);
};

export default Login;
