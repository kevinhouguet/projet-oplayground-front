import React from "react";
import { Link } from "react-router-dom";
import { func } from "prop-types";

import quitBtnImg from "../../assets/power.svg";

const QuitBtn = (props) => {
	const { onLogout } = props;

	return (
		<Link to="/">
			<img src={ quitBtnImg } className="btn btn-ghost w-14" onClick={onLogout} alt="disconnect button" />
		</Link>
	);
};

export default QuitBtn;

QuitBtn.propTypes = {
	onLogout: func.isRequired,
};


