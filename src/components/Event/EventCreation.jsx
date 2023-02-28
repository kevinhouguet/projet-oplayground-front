import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventCreation = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleEventDateChange = (event) => {
    setEventDate(event.target.value);
  };

  const handleEventTimeChange = (event) => {
    setEventTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const timestamp = Date.parse(`${eventDate} ${eventTime}`);
    // Envoyer les informations pour créer l'événement
    console.log("Nom de l'événement :", eventName);
    console.log("timestamp:", timestamp);
  };

  const handleCancel = () => {
    // Annuler la création de l'événement
    console.log("Création de l'événement annulée");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="windowCreationEvent p-4 rounded-xl bg-slate-200">
        <form onSubmit={handleSubmit}>
          <div className="nameSection pb-3 flex justify-center">
            <label>
              <h1 className="flex justify-center">Nom de l'événement :</h1>
              <input className="input input-warning w-auto max-w-xs " type="text" value={eventName} onChange={handleEventNameChange} />
            </label>
          </div>
          <div className="dateAndTimeSection">
            <label>
              Date de l'événement :
              <input className="rounded-md" type="date" value={eventDate} onChange={handleEventDateChange} />
            </label>
            <label>
              Heure de l'événement :
              <input className="rounded-md" type="time" value={eventTime} onChange={handleEventTimeChange} />
            </label>
          </div>
          <div className="buttonSection py-4 flex justify-evenly">
            <button className="btn btn-primary" type="submit">Valider</button>
            <Link to="/detail-terrain">
              <button className="btn btn-primary" type="button" onClick={handleCancel}>Annuler</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventCreation;
