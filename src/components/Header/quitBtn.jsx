import React from "react";
import { Link } from "react-router-dom";
import { func } from "prop-types";

import quitBtnImg from "../../assets/QuitBtnImg.svg";

const QuitBtn = (props) => {
  const { onLogout } = props;

  return (
    <Link to="/">
      <img src={ quitBtnImg } className="btn btn-ghost" onClick={onLogout} alt="disconect button" />
    </Link>
  );
};

export default QuitBtn;

QuitBtn.propTypes = {
  onLogout: func.isRequired,
};


