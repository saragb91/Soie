import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import {A} from 'hookrouter'

import "./ButterCard.css";

const ButterCard = ({ name, price, image, id }) => {

  return (
    <Col md={3}>
      <A href={`/details/${id}`}>
        <Card.Img className="image" src={image}></Card.Img>
      </A>
      <Card.Title className="titleButter">{name}</Card.Title>
      <Card.Text className="priceButter">{price}€</Card.Text>
    </Col>
  );
};

export default ButterCard;
