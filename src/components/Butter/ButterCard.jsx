import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
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

ButterCard.propTypes={
  name:PropTypes.string.isRequired,
  price:PropTypes.number.isRequired,
  image:PropTypes.string.isRequired,
  id:PropTypes.number.isRequired
}

export default ButterCard;

