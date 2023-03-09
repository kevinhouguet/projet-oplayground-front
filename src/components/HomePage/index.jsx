/* eslint-disable indent */
import React from "react";
import AutocompleteInput from "../../components/HomePage/AutocompleteInput";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="bg-cover bg-center flex-1 flex h-screen bg-[url('./assets/basketball.jpg')]">
    <div className="h-full grid gap-10 m-auto">
      {!localStorage.getItem("accessToken") && (
        <div className="flex gap-8">
          <Link to={"/connexion"}>
            <button className="btn btn-primary py-4 px-8 flex items-center justify-center">
              Connexion
            </button>
          </Link>

          <Link to={"/inscription"}>
            <button className="btn btn-primary py-4 px-8 flex items-center justify-center">
              inscription
            </button>
          </Link>
        </div>
      )}
      <AutocompleteInput />
    </div>
  </div>
);

export default HomePage;
