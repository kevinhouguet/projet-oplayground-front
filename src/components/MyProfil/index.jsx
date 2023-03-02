import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom"
import axios from "axios";

const MyProfil = (props) => {
  
  const [email, setEmail] = useState("");
  const { idUser, username } = props;

  useEffect(() => {
    const response = () => {
      axios.get(`https://oplaygroundapi.herokuapp.com/api/users/${idUser}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      })
        .then((response) => {
          setEmail(response.data.email)
          // Gérer la réponse de la requête
          console.log(response.data);
        })
        .catch((error) => {
          // Gérer les erreurs de la requête
          console.error(error);
        });
    };

    response();
  }, [idUser]);


  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <div className="my-profil">
      <div className="firstArea mb-2 flex justify-around">
        <div className="presentationSection py-2 m-4">
          <h1>Mon Compte</h1>
          <p className="text-sm">Retrouvez et mettez à jour ici toutes vos informations personnelles.</p>
        </div>
        <div className="btnArea flex flex-col mt-2 ">
          <Link to="/mon-profil-edit">
            <button className="btn btn-sm btn-secondary my-2">Editer mon profil</button>
          </Link>
          <label htmlFor="my-modal-6" className="btn btn-sm btn-secondary">Supprimer mon profil</label>
          <input type="checkbox" id="my-modal-6" className="modal-toggle" />
          <div className="modal modal-bottom sm:modal-middle">
            <div className="modal-box">
              <h3 className="font-bold text-lg">Comment ca ? Vous déclarez forfait ?</h3>
              <p className="py-4">Vous-etes sur le point de supprimer votre compte, etes-vous certain de le supprimer ?</p>
              <div className="modal-action">
                <label htmlFor="my-modal-6" className="btn btn-sm btn-primary">Oui,je confirme</label>
                <label htmlFor="my-modal-6" className="btn btn-sm btn-secondary">Non, je refuse</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="titleArea bg-yellow-300 py-1 px-4 mx-4">Mon Profil</div>
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2">
        <div className="bodyFormArea">
          <div className="firstAreaSection bg-base-200 mx-4 my-2 flex justify-around">
            <div className="textInuputArea">
              <div className="fistNameSection pb-1 pt-1 flex">
                <p className="flex-1 px-4 mt-1">Prénom:</p>
                <input className="input input-warning w-2/5 max-w-xs " type="text" placeholder="Jean"
                  {...register("firstName", { maxLength: 80 })} disabled />
              </div>
              <div className="lastNameSection pb-1 flex">
                <p className="flex-1 px-4">Nom :</p>
                <input className="input input-warning w-2/5 max-w-xs" type="text" placeholder="Dugenoux"
                  {...register("lastName", { maxLength: 100 })} disabled />
              </div>
              <div className="ageSection pb-1 flex">
                <p className="flex-1 px-4">Age :</p>
                <input className="input input-warning w-2/5 max-w-xs" type="number" placeholder="29"
                  {...register("age", { pattern: /^\S+@\S+$/i })} disabled />
              </div>
              <div className="sexeSection pb-1 flex justify-between">
                <p className="flex-1 px-4">Sexe :</p>
                <select className="input input-warning w-2/5 py-0 max-w-xs"
                  {...register("Sexe", {})} disabled>
                  <option value="Homme">Homme</option>
                  <option value=" Femme"> Femme</option>
                  <option value=" Non renseigné"> Non renseigné</option>
                </select>
              </div>
              <div className="cityArea pb-1 flex">
                <p className="flex-1 px-4">Localisation :</p>
                <input className="input input-warning w-2/5 max-w-xs" type="text" placeholder="Votre ville "
                  {...register("Location", { minLength: 8 })} disabled />
              </div>
            </div>
            <div className="imageInputArea">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbjlEHBqqh5beLO_wisopY5OqX1j1AcXc6O7Hfmf_T1ndC_vo7uqMXGopWenZ3hCm9vM&usqp=CAU" alt="avatar" />
              <input type="file" name="avatar"
                {...register("Avatar")} disabled />
            </div>
          </div>
          <div className="titleArea bg-yellow-300 py-1 px-4 mx-4 my-2">Mes informations personnelles</div>
          <div className="secondAreaSection bg-base-200 pb2-0 mx-4">
            <div className="textInuputArea mb-2 ">
              <div className="pseudoSection pb-1 pt-1 flex">
                <p className="flex-1 px-4"> Username </p>
                <input className="input input-warning w-2/5 max-w-xs" type="text" placeholder="JeanDu92"
                  {...register("username", { maxLength: 80 })} disabled value={username} />
              </div>
              <div className="pseudoSection pb-1 flex">
                <p className="flex-1 px-4"> Email </p>
                <input className="input input-warning w-2/5 max-w-xs" type="email" placeholder="adressmail@gmail.com"
                  {...register("email", { maxLength: 80 })} disabled value={email}/>
              </div>
              <div className="password pb-1 flex">
                <p className="flex-1 px-4">Mot de passe</p>
                <p className="input input-warning w-2/5 max-w-xs" disabled>********</p>
              </div>
              <div className="newPassword pb-1 flex">
                <p className="flex-1 px-4">Nouveau mot de passe :</p>
                <input className="input input-warning w-2/5 max-w-xs" type="password" placeholder="Nouveau mot de passe :"
                  {...register("Nouveau mot de passe", { minLength: 8 })} disabled />
              </div>
              <div className="newPasswordConfirmation pb-1 flex">
                <p className="flex-1 px-4">Confirmation du nouveau mot de passe :</p>
                <input className="input input-warning w-2/5 max-w-xs" type="password" placeholder="Confirmation du mot de passe :"
                  {...register("Confirmation du nouveau mot de passe", { min: 8 })} disabled />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default MyProfil;
