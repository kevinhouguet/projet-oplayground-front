import React from "react";

const BurgerMenu = () => {
  <div className="burgerMenu dropdown dropdown-end bg-secondary rounded-xl">
    <label tabIndex={0} className="btn btn-ghost rounded-btn">Bonjour Jean	&#127936;</label>
      <ul tabIndex={0} className="menu dropdown-content p-2 shadow bg-secondary-focus rounded-box w-52 mt-4">
        <li><a href="/mon-profil">Mon compte</a></li> 
        <li><a>Mes événements</a></li>
      </ul>
  </div>
}

export default BurgerMenu;
