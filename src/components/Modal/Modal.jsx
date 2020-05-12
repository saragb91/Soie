import React from "react";
import PropTypes from "prop-types";
//STYLE
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Modal.css'

const ModalButter = ({modalVisibility, closeModal, bodyMilk, deleteButter}) => {


  return (
    <>
      <Modal show={modalVisibility} onHide={() => closeModal()}>
        <Modal.Body>
          <h3 className="detailModal">Tus cremas favoritas</h3>
          <hr></hr>
          
          {bodyMilk.length===0 ? <p className='pModal'>Aún no ha añadido mantecas corporales</p>
          :
          bodyMilk.map(butter=>
            <Card className='cardModal'>
              <Row className='rowModal'>
                <Col md={2} className='clearModal'>
                  <Button onClick={()=>deleteButter(butter.id)} className="material-icons modalIcon">clear</Button>
                </Col>
                <Col md={5} className='colModal'>
                  <Card.Img className="imageModal" src={butter.image}></Card.Img>
                </Col>
                <Col md={5}>
                  <Card.Title className="nameModal">{butter.name}</Card.Title>
                  <Card.Text className="priceModal">{butter.price}€</Card.Text>
                </Col>
              </Row>
            </Card>
          )}
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
