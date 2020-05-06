import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

import "./ButterCard.css";

const ButterCard = ({ name, price, image, id }) => {

  return (
    <Col md={3}>
      <Card className='cardButter'>
      <a  className='aButterCard' href={`/details/${id}`}>
        <Card.Img className="image" src={image}></Card.Img>
      </a>
      <Card.Title className="titleButter">{name}</Card.Title>
      <Card.Text className="priceButter">{price}€</Card.Text>
      </Card>
    </Col>
    
  );
};
export default ButterCard;

