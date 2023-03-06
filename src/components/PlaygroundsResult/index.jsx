import React from "react";
import basketball from "../../assets/basketball.jpg";
import { func } from "prop-types";

import { useLocation, Link } from "react-router-dom";

const PlaygroundsResult = ({ updateData }) => {

	const location = useLocation();
	const resultData = location.state;

	const handleUpdateData = (newData) => {
		updateData(newData);
	};

	return (
		<div className="min-h-screen bg-cover bg-center flex flex-wrap justify-center bg-[url('./assets/white-painted-wall-texture-background.jpg')] p-10">
			{resultData.map((item) => (
				<div key={item.playgroundId} className="card lg:card-side bg-base-100 shadow-xl w-9/12 m-10">
					<img src={basketball} className="rounded-2xl w-1/3 h-110" alt="Album" />
					<div className="card-body">
						<h2 className="card-title">{item.name}</h2>
						<p className="mt-8 text-xl ">Surface : {item.surface}</p>
						<p className="mt-8 text-xl ">Type : {item.type}</p>
						<p className="text-xl">Adresse : {item.address}</p>
						<p className="text-xl">{item.zipCode} {item.city}</p>
						<div className="card-actions justify-end">
							<Link to={{
								pathname: `/detail-du-terrain/${item.playgroundId}`,
								state: { item: item }
							}}>
								<button onClick={() => handleUpdateData(item)} className="btn btn-primary py-2 px-4 text-lg">Plus d&apos;information</button>
							</Link>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default PlaygroundsResult;

PlaygroundsResult.propTypes = {
	updateData: func,
};
