import React from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import './Modal.css'

const ModalButter = ({modalVisibility, closeModal, bodyMilk}) => {
  return (
    <>
      <Modal show={modalVisibility} onHide={() => closeModal()}>
        <Modal.Body>
          <h3 className="detailModal">Tus cremas favoritas</h3>
          <hr></hr>
          <ul>
     
  {bodyMilk.map(elm=>
  <Card className='cardModal'>
    <Row>
      <Col>
    <Card.Img className="imageModal" src={elm.image}></Card.Img>
    </Col>
    <Col>
    <Card.Title className="nameModal">{elm.name}</Card.Title>
    <Card.Text className="priceModal">{elm.price}€</Card.Text>
    </Col>
    </Row>
  </Card>
  
  )}
           
          </ul>
       
        </Modal.Body>
      </Modal>
    </>
  );
};

ModalButter.propTypes = {
  modalVisibility: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  
};

export default ModalButter;
