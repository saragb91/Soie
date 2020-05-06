import React from "react";
import Row from "react-bootstrap/Row";
import "./Butters.css";
import ButterCard from "./ButterCard";
import ButList from "./ButList";

const Butters = () => {


  return (
    <>
      <div className='butterCont'>
      <h2 className='h2Butter'>Mantecas corporales</h2>
      <Row>
        {ButList.map((elm) => (
          <ButterCard key={elm.id} {...elm} />
        ))}
      </Row>
      </div>
    </>
  );
};

export default Butters;
