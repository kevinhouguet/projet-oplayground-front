import React, { useState } from "react";

const Mesevents = () => {

    const [eventName, setEventName] = useState("");
    const [eventDate, setEventDate] = useState("");
    const [eventTime, setEventTime] = useState("");
    const [modificationEvent, setModificationEvent] = useState(false);

  const handleButtonClick = () => {
    setModificationEvent(!modificationEvent);
    setEventName("");
    setEventDate("");
    setEventTime("");
    
  };

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

  return (

    <div className="h-screen bg-cover bg-center bg-[url('./assets/white-painted-wall-texture-background.jpg')]">
      <div className=" flex flex-wrap justify-center ">
        <div className="card lg:card-side bg-base-100 shadow-xl w-9/12 m-10 text-center">
          <div className="card-body">
            <p className="text-4xl">Match de foot amical</p>
            <p className="text-2xl">Terrain sud</p>
            <p className="text-2xl">29/04/1993</p>
          </div>
          <button className="btn btn-primary m-5" onClick={handleButtonClick}>
            {modificationEvent ? "Annuler" : "Modifier"}
          </button>
        </div>

        {modificationEvent && (

        <div className="p-4 rounded-xl bg-slate-200">
            <form onSubmit={handleSubmit}>
            <div className="nameSection pb-3 flex justify-center">
                <label>
                <h1 className="flex justify-center">Nom de l'événement :</h1>
                <input className="input input-warning w-auto max-w-xs " type="text" value={eventName} onChange={handleEventNameChange} />
                </label>
            </div>
            <div className="flex justify-center">
                <label className="">
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
                <button className="btn btn-primary" type="submit">Supprimer</button>
            </div>
            </form>
        </div>
        )}
      </div>
    </div>

    
  );
};

export default Mesevents;
