/* eslint-disable indent */
import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { number, func, bool } from "prop-types";
import { Link } from "react-router-dom";

const MyProfil = ({ idUser, changeDisabled, isDisabled }) => {
  const [data, setData] = useState({});
  const [firstname, setFirstname] = useState(data.firstname);
  const [lastname, setLastname] = useState(data.lastname);
  const [city, setCity] = useState(data.city);
  const [username, setUsername] = useState(data.username);
  const [age, setAge] = useState(data.age);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    const response = () => {
      axios
        .get("https://oplaygroundapi.herokuapp.com/api/users", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => {
          setData(response.data);
          setFirstname(response.data.firstname);
          setLastname(response.data.lastname);
          setCity(response.data.city);
          setUsername(response.data.username);
          setAge(response.data.age);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    response();
  }, []);

  const { register, handleSubmit } = useForm();

  const onUpdate = ({
    lastname,
    firstname,
    city,
    password,
    username,
    age,
    sexe,
  }) => {
    axios
      .patch(
        "https://oplaygroundapi.herokuapp.com/api/users/",
        {
          lastname,
          firstname,
          city,
          password,
          username,
          age,
          sexe,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((response) => {
        console.log("log response", response);
        setData(response.data);
        setFirstname(response.data.firstname);
        setLastname(response.data.lastname);
        setCity(response.data.city);
        setUsername(response.data.username);
        setAge(response.data.age);
        setIsUpdated(true);
        changeDisabled();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const onDelete = () => {
    axios
      .delete("https://oplaygroundapi.herokuapp.com/api/users/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        setData(response.data);
        setFirstname("");
        setLastname("");
        setCity("");
        setUsername("");
        setAge();
        localStorage.removeItem("accessToken");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="my-profil">
      <div className="firstArea mb-2 flex justify-around">
        <div className="presentationSection py-2 m-4">
          <h1>Mon Compte</h1>
          <p className="text-sm">
            Retrouvez et mettez à jour ici toutes vos informations personnelles.
          </p>
          {isUpdated && (
            <p className="text-xl text-success">
              Les modifications ont été apportées à votre profil.
            </p>
          )}
        </div>
        <div className="btnArea flex flex-col mt-2 ">
          <button
            onClick={changeDisabled}
            type="button"
            className="btn btn-sm btn-secondary my-2"
          >
            Editer mon profil
          </button>
        </div>
      </div>
      <div className="titleArea bg-yellow-300 py-1 px-4 mx-4">Mon Profil</div>
      <form onSubmit={handleSubmit(onUpdate)} className="mt-2">
        <div className="bodyFormArea">
          <div className="firstAreaSection bg-base-200 mx-4 my-2 flex justify-around">
            <div className="textInuputArea">
              <div className="fistNameSection pb-1 pt-1 flex">
                <p className="flex-1 px-4 mt-1">Prénom:</p>
                <input
                  className="input input-warning w-2/5 max-w-xs "
                  type="text"
                  placeholder={data.firstname}
                  {...register("firstname", { maxLength: 80 })}
                  disabled={isDisabled}
                  value={firstname}
                  onChange={(event) => setFirstname(event.target.value)}
                />
              </div>
              <div className="lastNameSection pb-1 flex">
                <p className="flex-1 px-4">Nom :</p>
                <input
                  className="input input-warning w-2/5 max-w-xs"
                  type="text"
                  placeholder={data.lastname}
                  {...register("lastname", { maxLength: 100 })}
                  disabled={isDisabled}
                  value={lastname}
                  onChange={(event) => setLastname(event.target.value)}
                />
              </div>
              <div className="ageSection pb-1 flex">
                <p className="flex-1 px-4">Age :</p>
                <input
                  className="input input-warning w-2/5 max-w-xs"
                  type="number"
                  placeholder={data.age}
                  {...register("age", { pattern: /^[0-9]+$/ })}
                  disabled={isDisabled}
                  value={age}
                  onChange={(event) => setAge(event.target.value)}
                />
              </div>
              <div className="sexeSection pb-1 flex justify-between">
                <p className="flex-1 px-4">Sexe :</p>
                <select
                  className="input input-warning w-2/5 py-0 max-w-xs"
                  {...register("sexe", {})}
                  disabled={isDisabled}
                >
                  <option value="Homme">Homme</option>
                  <option value="Femme">Femme</option>
                  <option value="Non renseigné">Non renseigné</option>
                </select>
              </div>
              <div className="cityArea pb-1 flex">
                <p className="flex-1 px-4">Localisation :</p>
                <input
                  className="input input-warning w-2/5 max-w-xs"
                  type="text"
                  placeholder={data.city}
                  {...register("city", { minLength: 2 })}
                  disabled={isDisabled}
                  value={city}
                  onChange={(event) => setCity(event.target.value)}
                />
              </div>
            </div>
            {/* <div className="imageInputArea">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBbjlEHBqqh5beLO_wisopY5OqX1j1AcXc6O7Hfmf_T1ndC_vo7uqMXGopWenZ3hCm9vM&usqp=CAU" alt="avatar" />
							<input type="file" name="avatar"
								{...register("avatar")} disabled={isDisabled} />
						</div> */}
          </div>
          <div className="titleArea bg-yellow-300 py-1 px-4 mx-4 my-2">
            Mes informations personnelles
          </div>
          <div className="secondAreaSection bg-base-200 pb2-0 mx-4">
            <div className="textInuputArea mb-2 ">
              <div className="pseudoSection pb-1 pt-1 flex">
                <p className="flex-1 px-4"> Username </p>
                <input
                  className="input input-warning w-2/5 max-w-xs"
                  type="text"
                  placeholder={data.username}
                  {...register("username", { maxLength: 80 })}
                  disabled={isDisabled}
                  value={username}
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="pseudoSection pb-1 flex">
                <p className="flex-1 px-4"> Email </p>
                <input
                  className="input input-warning w-2/5 max-w-xs"
                  type="email"
                  placeholder={data.email}
                  {...register("email", { maxLength: 80 })}
                  disabled
                  value={data.email}
                />
              </div>
              <div className="password pb-1 flex">
                <p className="flex-1 px-4">
                  {!isDisabled ? "Ancien mot de passe" : "Mot de passe"}
                </p>
                <input
                  className="input input-warning w-2/5 max-w-xs"
                  placeholder="********"
                  disabled
                />
              </div>

              {!isDisabled ? (
                <>
                  <div className="newPassword pb-1 flex">
                    <p className="flex-1 px-4">Nouveau mot de passe :</p>
                    <input
                      className="input input-warning w-2/5 max-w-xs"
                      type="password"
                      placeholder="Nouveau mot de passe"
                      {...register("password", { minLength: 8 })}
                    />
                  </div>
                  <div className="newPasswordConfirmation pb-1 flex">
                    <p className="flex-1 px-4">
                      Confirmation du nouveau mot de passe :
                    </p>
                    <input
                      className="input input-warning w-2/5 max-w-xs"
                      type="password"
                      placeholder="Confirmation du mot de passe"
                      {...register("Confirmation du nouveau mot de passe", {
                        min: 8,
                      })}
                    />
                  </div>
                  <div className="btnContainer py-2 flex items-center justify-evenly">
                    <input
                      onClick={() => {
                        console.log(
                          "state :",
                          lastname,
                          firstname,
                          city,
                          username,
                          age
                        );
                      }}
                      className="btn btn-primary"
                      type="submit"
                      value="Valider"
                    />
                    <Link to="/mon-profil">
                      <button className="btn btn-primary">Annuler</button>
                    </Link>
                  </div>
                </>
              ) : null}
              <label
                htmlFor="my-modal-6"
                className="btn btn-sm btn-secondary flex bg-red-600"
              >
                Supprimer mon profil
              </label>
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <h3 className="font-bold text-lg">
                    Comment ca ? Vous déclarez forfait ?
                  </h3>
                  <p className="py-4">
                    Vous-etes sur le point de supprimer votre compte, etes-vous
                    certain de le supprimer ?
                  </p>
                  <div className="modal-action">
                    <label
                      onClick={() => onDelete(idUser)}
                      htmlFor="my-modal-6"
                      className="btn btn-sm btn-primary"
                    >
                      Oui,je confirme
                    </label>
                    <label
                      htmlFor="my-modal-6"
                      className="btn btn-sm btn-secondary"
                    >
                      Non, je refuse
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default MyProfil;

MyProfil.propTypes = {
  idUser: number,
  changeDisabled: func,
  isDisabled: bool,
};
