import React from "react";
import "./Index.css";

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
          <a href="/butters" className="buttonIndex">
            Descubre nuestras mantecas
          </a>
      </div>
        </div>
    </>
  );
};

export default Index;
