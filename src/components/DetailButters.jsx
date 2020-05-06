import React, { useState, useEffect } from "react";
import ButList from "./ButList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import './DetailButters.css'
import {Link} from "react-router-dom";

const DetailsButters = (props) => {
 
  const [butter, setButter] = useState({});

  useEffect(() => {

    const search = ButList.filter((b) => b.id === parseInt(props.match.params.id)).pop();
    setTimeout(() => setButter(search), 2000)

  }, []);
  
  return (
    
    <>
   <div className='divDetail'>
        <h2 className='h2Detail'>{butter.name}</h2>
       {Object.keys(butter).length === 0 ?

<>
            <div className='container-charge'> <div id="charge"></div></div>
         
        </> 
        :
        <>

        <Row className='rowDetail'>
            <Col md={4} className='colDetail'>
            <img className='imageDetail'src={butter.image} alt="" />
            </Col>
            <Col md={4} className='colDetail'>
            <p className='pDetails'>{butter.description}</p>
            </Col>
        </Row>
            <div className='positionLink'>
            <Link to={"/butters"} className='aDetail'>Volver a las mantecas</Link>
            </div>
        </>
        }
        </div>
    </>
  );
};

export default DetailsButters;
