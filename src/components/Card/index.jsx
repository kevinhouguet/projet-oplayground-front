import React, { useState, useEffect } from "react";
// import axios from "axios";
import basketball from "../../assets/basketball.jpg";
import { useLocation } from "react-router-dom";


const Header = () => {

  const location = useLocation();
  const data = location.state;
  console.log(data)


//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://oplaygroundapi.herokuapp.com/api/terrains/26250")
//       .then((response) => setData(response.data))
//       .catch((error) => console.log(error));
//   }, []);

  return (
    <div className="min-h-screen bg-cover bg-center flex flex-wrap justify-center bg-[url('./assets/white-painted-wall-texture-background.jpg')] p-10">
      {data.map((item) => (
        <div className="card lg:card-side bg-base-100 shadow-xl w-9/12 m-10">
          <img src={basketball} className="rounded-2xl w-1/3 h-110" alt="Album" />
          <div className="card-body">
            <h2 className="card-title">{item.name}</h2>
            <p className="mt-8 text-xl ">Surface : {item.surface}</p>
            <p className="mt-8 text-xl ">Type : {item.type}</p>
            <p className="text-xl">Adresse : {item.address}</p>
            <p className="text-xl">{item.zipCode} {item.city}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary py-2 px-4 text-lg">Plus d'information</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Header;
