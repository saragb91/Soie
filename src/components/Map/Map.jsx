import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
//STYLE
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './Map.css'

const Address = () => {
  const directions = [
    {
      lat: 40.42912,
      leng: -3.687118,
    },
    {
      lat: 40.422656,
      leng: -3.70073,
    },
  ];
  
  let latMap = directions.map(address => address.lat);
  let lengMap = directions.map(address => address.leng);

  return (

    <div className='containMap'>
      <h2 className='h2Map'>¿Dónde encontrarnos?</h2>

      <Row className='rowMap'>
        <Col md={8} className='colMap'>
          <div className='styleMap'>
            <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
            center={[40.425, -3.693212]}
            zoom={15}
            >
              <Marker
                lat={latMap[0]}
                lng={lengMap[0]}
                name="My Marker"
                color="#cc3e0a"
              />

              <Marker
                lat={latMap[1]}
                lng={lengMap[1]}
                name="My Marker"
                color="#cc3e0a"
              />
            </GoogleMapReact>
          </div>
        </Col>
        <Col md={4} className='colInfo'>
          <h3 className='h3Map'>Soie Fuencarral</h3>
          <p className='pMap'>Calle Fuencarral 36</p>
          <p className='pMap'>Madrid</p>
          <p className='pMap'>875854725</p>
          <hr className='hrMap'/>
          <h3 className='h3Map'>Soie Serrano</h3>
          <p className='pMap'>Calle Serrano 45</p>
          <p className='pMap'>Madrid</p>
          <p className='pMap'>872681423</p>
        </Col>
      </Row>
    </div>
  );
};

export default Address;
