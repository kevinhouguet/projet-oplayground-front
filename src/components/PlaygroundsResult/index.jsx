/* eslint-disable indent */
import React from "react";
import basketball from "../../assets/basketball.jpg";
import { func, string } from "prop-types";

import { useLocation, Link } from "react-router-dom";

const PlaygroundsResult = ({ updateData, token }) => {
  const location = useLocation();

  const handleUpdateData = (newData) => {
    updateData(newData);
  };

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-wrap justify-center bg-[url('./assets/white-painted-wall-texture-background.jpg')] p-10">
      {location.state.length > 0 ? (
        location.state.map((item) => (
          <div
            key={item.playgroundId}
            className="card lg:card-side bg-base-100 shadow-xl w-9/12 m-10"
          >
            <img
              src={basketball}
              className="rounded-2xl w-1/3 h-110"
              alt="Album"
            />
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="mt-8 text-xl ">Surface : {item.surface}</p>
              <p className="mt-8 text-xl ">Type : {item.type}</p>
              <p className="text-xl">Adresse : {item.address}</p>
              <p className="text-xl">
                {item.zipCode} {item.city}
              </p>
              <div className="card-actions justify-end">

              {!token ? (

                <button className="btn btn-secondary py-2 px-4 text-lg" disabled>
                  Connectez-vous pour en savoir plus
                </button>
              ) : (
                <Link
                  to={{
                    pathname: `/detail-du-terrain/${item.playgroundId}`,
                    state: { item: item },
                  }}
                >
                  <button
                    onClick={() => handleUpdateData(item)}
                    className="btn btn-primary py-2 px-4 text-lg"
                  >
                    Plus d&apos;information
                  </button>
                </Link>
                )}
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="m-auto">
          <div className="flex flex-col text-3xl font-bold text-center">
          Désolé, il n'y a pas de terrain dans ta ville.

          <a href="mailto:contact@playground.com" className="text-blue-500 hover:text-blue-700 text-2xl mt-8"> Tu peux nous contacter pour en rajouter un ! </a>

          <Link to="/">
					<p className="btn btn-primary mt-8">Rechercher un autre terrain</p>
					</Link>

          </div>
        </div>
        
        
      )}
    </div>
  );
};

PlaygroundsResult.propTypes = {
  updateData: func,
};

export default PlaygroundsResult;

PlaygroundsResult.propTypes = {
  updateData: func,
  token: string,
};
