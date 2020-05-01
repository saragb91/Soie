import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./Butters.css";
import ButterCard from "./ButterCard";
import ButList from "./ButList";

const Butters = () => {


  return (
    <Container className='butterCont'>
      <h2>Mantecas corporales</h2>
      <Row>
        {ButList.map((elm) => (
          <ButterCard key={elm.id} {...elm} />
        ))}
      </Row>
    </Container>
  );
};

export default Butters;
