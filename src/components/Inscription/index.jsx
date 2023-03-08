import { bool, func, shape } from "prop-types";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";

const Inscription = (props) => {
	const [idUser, setIdUser] = useState();
	const [username, setUsername] = useState("");
	
	const { 
		open,
		openbis,
		toggle,
		togglebis,
		checked,
		onChange,
	} = props;
	
	const { 
		handleSubmit,
		register,
		watch, 
		formState : { errors },
	} = useForm();

	const onSubmit = ({ email, username, password }) => {
		axios.post("https://oplaygroundapi.herokuapp.com/api/users", { email, username, password })
			.then((response) => {
				setIdUser(Number(response.data.id));
				setUsername(response.data.username);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	
	const pwd = watch("password");

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
				<div className="relative">
					<input className="input input-warning w-full max-w-xs" type={(openbis === false)? "password" : "text"} 
						{...register("password", {required : true, minLength : 8})}  />
					<div className="text-2xl absolute bottom-[12px] right-[5px]">
						{
							(false === openbis) ? <AiFillEyeInvisible onClick={togglebis}/> : <AiFillEye onClick={togglebis} />
						}
					</div>
				</div>
				{errors.password && <p className="text-red-600 text-sm"> Mot de passe obligatoire et doit être supérieur à 8 caractères</p>}



				<label className="label-text-xl"> Confirmation mot de passe* : </label>
				<div className="relative">
					<input className="input input-warning w-full max-w-xs" type={(open === false)? "password" : "text"}
						{...register("passwordconfirm", {required : true, validate : value => value === pwd})} />
					<div className="text-2xl absolute bottom-[12px] right-[5px]">
						{
							(false === open) ? <AiFillEyeInvisible onClick={toggle}/> : <AiFillEye onClick={toggle} />
						}
					</div>
				</div>
				{errors.passwordconfirm && <p className="text-red-600 text-sm"> Le mot de passe est différent et doit être supérieur à 8 caractères </p>}


				<p className="text-sm">*Champs obligatoires</p>

				<div className="flex justify-center">
					<button className="btn btn-primary my-7 " type="submit"> Inscription </button>
				</div>
					
				<div className="underline pb-3">
					<Link to="/connexion">
							Tu as déjà un compte ? Clique ici
					</Link>
				</div>
			</form>

			{
				idUser && <>
					<input type="checkbox" id="my-modal-4" className="modal-toggle" checked={idUser && checked ? true : false} onChange={onChange} />
					<label htmlFor="my-modal-4" className="modal cursor-pointer">
						<label className="modal-box relative" htmlFor="">
							<h3 className="text-lg font-bold">Bonjour {username}</h3>
							<p className="py-4">Bien joué ton compte a été correctement créé</p>
							<div className="modal-action"></div>
							<Link to="/connexion">
								<label htmlFor="my-modal-5" className="btn">Se connecter</label>
							</Link>
						</label>
					</label>
				</>
			}

		</div>
	);
};

export default Inscription;

Inscription.propTypes = {
	open: bool.isRequired,
	openbis: bool.isRequired,
	toggle: func.isRequired,
	togglebis: func.isRequired,
	checked: shape({
		checked : bool.isRequired,
	}).isRequired,
	onChange: func.isRequired,
};
