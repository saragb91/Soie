import React from "react";
import ButList from "../ButList";
//STYLE
import Row from "react-bootstrap/Row";
import ButterCard from "./ButterCard";
import "./Butters.css";

const Butters = () => {


  return (
    <>
      <div className='butterCont'>
      <h2 className='h2Butter'>Mantecas corporales</h2>
      <Row>
        {ButList.map(butter => (
          <ButterCard key={butter.id} {...butter} />
        ))}
      </Row>
      </div>
    </>
  );
};

export default Butters;
