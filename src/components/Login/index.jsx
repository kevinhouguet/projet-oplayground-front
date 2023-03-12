import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from "react-router-dom";
import axios from "axios";



const Login = () => {
	const [open, setOpen] = useState(false);
	const [username, setUsername] = useState("");
	const [isError, setIsError] = useState(false);



	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm();

	const toggle = () => {
		setOpen(!open);
	};

	const getUsername = () => {
		axios.get("https://oplaygroundapi.herokuapp.com/api/users", {
			headers: {
				Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
			},
		})
			.then((response) => {
				setUsername(response.data.username);
			})
			.catch((error) => {
				console.error(error);
			});
	};

	const onSubmit = (data) => {
		axios.post("https://oplaygroundapi.herokuapp.com/api/users/signin", data)
			.then((response) => {
				axios.defaults.headers.common.Authorization = `Bearer ${response.data.accessToken}`;
				localStorage.setItem("accessToken", response.data.accessToken);
				setIsError(false);
				getUsername();
				location.reload();
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
				<input className="input input-warning w-full max-w-xs" type="email" {...register("email", { required: true })} />
				{errors.email && <p className="text-red-600 text-sm"> Adresse mail non renseignée </p>}

				<label className="label-text-xl"> Mot de passe* : </label>
				<div className="relative">
					<input className="input input-warning w-full max-w-xs" type={(open === false) ? "password" : "text"} 
						{...register("password", {required : true, minLength : 8})}  />
					<div className="text-2xl absolute bottom-[12px] right-[5px]">
						{
							(false === open) ? <AiFillEyeInvisible onClick={toggle}/> : <AiFillEye onClick={toggle} />
						}
					</div>
				</div>
				{errors.password && <p className="text-red-600 text-sm"> Mot de passe obligatoire et doit être supérieur 8 caractères</p>}


				<p className="text-sm">*Champs obligatoires</p>

				<div className="flex justify-center">
					<button htmlFor="my-modal" className="btn btn-secondary" type="submit"> Connexion </button>

					<input
						checked={localStorage.getItem("accessToken") ? true : false}
						type="checkbox"
						id="my-modal"
						className="modal-toggle"
						form="login-form"
						onChange={() => {}}
					/>
					<div className="modal">
						<div className="modal-box">
							<h3 className="font-bold text-lg">Hey {username} te voila connecté</h3>
							<p className="py-4">
								Pret pour exploser les scores ? Les playground n&apos;attendent que toi.
							</p>
							<div className="modal-action">
								<Link to="/">
									<label htmlFor="my-modal" className="btn">
										C&apos;est parti !
									</label>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="underline pb-3">
					<Link to="/inscription">
						Tu n&apos;as pas de compte ? Inscris toi ici !
					</Link>
				</div>
        
			</form>

			{
				isError
				&&
				<p className="text-red-600 text-sm"> Connexion échouée ! Adresse mail et/ou mot de passe incorrect ! </p>
			}

		</div>
	);
};

export default Login;
