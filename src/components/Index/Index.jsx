import React from "react";
import "./Index.css";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <>
      <div className="welcome">
        <h1 className="h1Index">Bienvenidos a Soie</h1>
        <h2 className="h2Index">
          Las mantecas corporales Soie están hechas artesalmente, con los
          mejores productos naturales y de proximidad. Además cuenta con el
          sello free-cruelty
        </h2>
        <div className="textIndex">
          <Link to="/butters" className="buttonIndex">
            Descubre nuestras mantecas
          </Link>
        </div>
      </div>
    </>
  );
};

export default Index;
