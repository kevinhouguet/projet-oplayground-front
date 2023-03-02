import React from "react";
import { Link } from "react-router-dom";

const SubscriptionBtn = () => {

  return (
    <div className="flex gap-8">
      <Link to={"/inscription"}>
        <button className="btn btn-primary py-4 px-8 flex items-center justify-center">
          inscription
        </button>
      </Link>
    </div>
  )
}

export default SubscriptionBtn;
