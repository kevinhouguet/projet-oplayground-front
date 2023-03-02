import React, { useState, useEffect, useRef } from "react";
import AutocompleteInput from "../../components/HomePage/AutocompleteInput";
import string from "prop-types";

import ConnexionBtn from "./connexionBtn";
import SubscriptionBtn from "./subscriptionBtn";

const HomePage = (props) => {
	const { username } = props;
	return (
		<div className="bg-cover bg-center flex-1 flex h-screen bg-[url('./assets/basketball.jpg')]">
			<div className="h-full grid gap-10 m-auto">
				{!username ? (
					<div className="flex gap-8">
						<ConnexionBtn />
						<SubscriptionBtn />
					</div>
				) : null}
				<AutocompleteInput />
			</div>
		</div>
	);
};

export default HomePage;

HomePage.prototype = {
	username: string,
}
