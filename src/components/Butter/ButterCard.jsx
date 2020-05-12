import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//STYLE
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import "./ButterCard.css";

const ButterCard = ({ name, price, image, id }) => {

  return (
    <Col md={3}>
      <Card className='cardButter'>
        <Link to={`/details/${id}`} className='linkCard'>
          <Card.Img className="image" src={image}></Card.Img>
          <Card.Title className="titleButter">{name}</Card.Title>
          <Card.Text className="priceButter">{price}€</Card.Text>
        </Link>
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

