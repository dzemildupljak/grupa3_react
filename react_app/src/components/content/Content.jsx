import React from "react";
import "./Content.css";

const Content = ({ name, prezime, prom_vred }) => {
  return (
    <div className="body">
      <div className="card">
        {name}
        {prezime}
      </div>
      <button onClick={() => prom_vred("vrednost iz podkomponente")}>
        Promena rezerve
      </button>
    </div>
  );
};

export default Content;
