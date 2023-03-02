import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { bool, func, string } from "prop-types";
import axios from "axios";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";


const Login = (props) => {
	const [isError, setIsError] = useState(false);
	
	const { open, toggle, onLogout, token, setToken, username, setUsername } = props;

	const { 
		handleSubmit, 
		register,
		formState : {errors},
	} = useForm();

	const onSubmit = (data) => {
		axios.post("https://oplaygroundapi.herokuapp.com/api/users/signin", data)
			.then((response) => {
				axios.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
				localStorage.setItem("accessToken", response.data.accessToken);
				setToken(response.data.accessToken);
				setIsError(false);
				setUsername(jwtDecode(response.data.accessToken).username);
			})
			.catch((error) => {
				console.error(error);
				setIsError(true);
			});
	};

	return (
		<div className="m-auto">

			<h1 className="flex justify-center p-6 text-2xl">Se connecter</h1>
			
			<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-1 form-control w-full max-w-xs relative">
			
				<label className="label-text-xl"> Adresse mail* : </label>
				<input className="input input-warning w-full max-w-xs" type="email" {...register("email", {required : true})} />
				{errors.email && <p className="text-red-600 text-sm"> Adresse mail non renseignée </p>}

				<label className="label-text-xl"> Mot de passe* : </label>
				<input className="input input-warning w-full max-w-xs" type={(open === false) ? "password" : "text"} 
					{...register("password", {required : true, minLength : 8})}  />
				{errors.password && <p className="text-red-600 text-sm"> Mot de passe obligatoire et doit être supérieur 8 caractères</p>}
				
				<div className="text-2xl absolute bottom-20 right-3">
					{
						(open === false) 
						?
						<AiFillEyeInvisible onClick={toggle}/> 
						: 
						<AiFillEye onClick={toggle}/>
					}
				</div>

				<p className="text-sm">*Champs obligatoires</p>

				<div className="flex justify-center">
					<button className="btn btn-primary my-7 " type="submit"> Connexion </button>
				</div>

        <div className="underline pb-3">
					<Link to="/inscription">
						Tu n'as pas de compte ? Inscris toi ici !
					</Link>
				</div>
        
			</form>

			{
				token
					&&
					<p> Bonjour {username}. Connexion réussi ! </p>
			}

			{
				isError
					&&	
					<p className="text-red-600 text-sm"> Connexion échouée ! Adresse mail et/ou mot de passe incorrect ! </p>
			}

		</div>
	);
};

export default Login;

Login.propTypes = {
	open: bool.isRequired,
	toggle: func.isRequired,
	username: string,
	token: string,
	setToken: func.isRequired,
	setUsername: func.isRequired,
};
